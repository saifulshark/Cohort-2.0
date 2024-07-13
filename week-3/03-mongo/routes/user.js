const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({username: username});

    if(existingUser){
       return res.json({
            msg: "Your already have an account"
        });
    }

    const user = new User({
        username: username,
        password:password
    })

    user.save();
    return res.status(200).json({
        msg: "Signup successfully"
    });

});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses : response
    });
});

router.post('/courses/:courseId',  userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {
        const username = req.headers.username;
        const courseId = req.params.courseId;
    
        await User.updateOne({
            username: username
        },{
            "$push" :{
                purchasedCourses : courseId
            }
        });
    
        res.json({
            msg: "course purchase successful"
        });

    } catch (error) {
        res.json({
            msg: "something went wrong"
        });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.headers.username
    });

    const courses = await Course.find({
     _id:{
       "$in":user.purchasedCourses 
     }   

    });

    res.status(200).json({
        purchasedCourses : courses
    })
});

module.exports = router