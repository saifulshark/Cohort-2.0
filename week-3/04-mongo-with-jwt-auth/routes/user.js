const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}=require("../db")
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../config");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;
    await User.create({
        username,
        password
    })
    res.json({
        msg:"User created"
    })
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    const user =await User.find({
        username,
        password
    })
    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token
        })
    }
    else{
        res.status(401).json({
            msg:"Incorrect email and password"
        })
    }

});

router.get('/courses',userMiddleware, async(req, res) => {
    // Implement listing all courses logic
    const ans= await Course.find({});
    res.json({
        courses:ans
    })

});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const course_to_purchase=req.params.courseId;
    const username=req.username;
    await User.updateOne({
        username    
    },{
        "$push":{
            purchasedCourses:course_to_purchase
        }
    })
    res.json({
        msg:"purchase succesfull"
    })

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=req.username;
    console.log(username)
    const user=await User.findOne({
        username
    })
    console.log(user)
    const pur_Courses=await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    });
    res.json({
        courses:pur_Courses
    })
});

module.exports = router