const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course } = require("../db");
const {User}=require("../db")

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;
    const newUser=new User({
        username:username,
        password:password,
        purchasedCourses:[],
    })
    newUser.save()
    res.send("new user added")
})
router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const data=await Course.find({})
    res.json(data)
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const username=req.headers.username;
    const password=req.headers.password;
    try{
        await User.updateOne(
            {username:username},
            {
            "$push":{
                purchasedCourses:courseId
            }
        })
    }catch(e){
        console.log(e);
    }
    res.send("course purchased successfully")


});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers.username;
    const password=req.headers.password;
    const data=await User.findOne({
        username:username,
        password:password,
    })
    const courses=await Course.find({
        _id:{
            "$in":data.purchasedCourses
        }
    })
    res.json({
        coursespurchased:courses})
});

module.exports = router