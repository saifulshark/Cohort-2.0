const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const {Course}=require("../db");
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;

    try{
        const response=await User.findOne({
            username,
            password
        })
        if(response){
            res.json({
                msg:"there is already a user"
            })
        }
        else{
            await User.create({
                username,
                password
            })
            res.json({
                msg:"user created successfully"
            })
        }
    }
    catch(error){
        res.json({
            msg:"there is some internal server"
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const ans= await Course.find({});
    res.json({
        courses:ans
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        // Implement course purchase logic
        const username = req.headers.username;
        const courseId = req.params.courseId;

        await User.updateOne({
            username:username
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        });

        res.json({
            msg: "Purchase successful"
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            msg: "An error occurred during the purchase process"
        });
    }
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const username = req.headers.username;
        console.log(username)
        const user = await User.findOne(
            { username }
        );
        console.log(user.purchasedCourses)

        if (!user) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        const coursesBought = await Course.find({
            _id: {
                "$in": user.purchasedCourses
            }
        });

        res.json({
            courses: coursesBought
        });
    } catch (err) {
        console.error(err); 
        res.status(500).json({
            msg: "There was an error fetching the purchased courses"
        });
    }
});


module.exports = router