const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt=require("jsonwebtoken")
const jwtSecret="cdsxcdxs"

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.headers.username
    const password=req.headers.password
    User.create({username:username,password:password})
    res.json({msg:" User "+username+" added to db"})

});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username=req.headers.username
    const password=req.headers.password
    let findresult=await User.findOne({username:username})
    console.log(findresult)
    if(findresult!=null)
    {
        let token=jwt.sign({username:username,password:password},jwtSecret)
        res.json({token:token})

    }
    else{
        res.status(404).json({msg: "User "+username+" not present in the db"})
    }
    

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    let courses= await Course.find({})
    res.json({courses:courses})
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId=req.headers.courseid
    console.log("req.username in users - "+req.username)
    console.log("courseId - "+courseId)
    await User.updateOne({username:req.username},{
        "$push":{
            purchasedCourses:courseId
        }
    })
    res.json({msg : "User "+req.username+" purchased course - "+courseId})
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const courseId=req.headers.courseId
    let findUser=await User.findOne({username:req.username})
    console.log(findUser)
    let userCourses=await Course.find({
        _id:{
            "$in": findUser.purchasedCourses
        }
    })
    res.json({
        msg:"User -"+req.username+" purchased courses",
        courses:userCourses
    })
});

module.exports = router