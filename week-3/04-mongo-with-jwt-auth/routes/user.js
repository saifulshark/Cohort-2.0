const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course}=require("../db");
const jwtPassword="gauravpadda"
const jwt=require("jsonwebtoken")
const { default: mongoose } = require("mongoose");
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.headers.username;
    const password=req.headers.username;
    User.create({
        username,
        password
    })
    res.send("new user created")
    
    
});

router.post('/signin', async(req, res) => {
    const username=req.headers.username;
    const password=req.headers.password;
    const data =await Admin.findOne({
        username:username,
        password:password
    })
    if(data){
        const token=jwt.sign({username:username},jwtPassword);
        res.json({
            token:token
    
        })
    }else{
        res.status(403).send("invalid credentials")
    }

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const data=await Course.find({})
    res.json({
        courses:data
    })
    
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const jwttoken=req.headers.authorization
    const word=jwttoken.split(" ")
    const token=word[1]
    const decode=jwt.verify(token,jwtPassword)
    const courseId=req.params.courseId;
    const username=decode.username
    await User.updateOne({username:username},{
        "$push":{
            purchasedCourses:courseId
        }
    })
    res.send("new course purchased")
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const jwttoken=req.headers.authorization
    const word=jwttoken.split(" ")
    const token=word[1]
    const decode=jwt.verify(token,jwtPassword)
    const username=decode.username
    const user=await User.findOne({username:username})
    const purchasedcourses=await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        course:purchasedcourses
    })
});

module.exports = router