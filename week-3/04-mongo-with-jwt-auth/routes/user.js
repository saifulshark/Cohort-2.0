const { Router } = require("express");
const router = Router();
const jwt = require('jsonwebtoken')
const jwtSecreat = require('../config')
const userMiddleware = require("../middleware/user");
const {User,Course} = require('../db/index')
// User Routes
router.post('/signup', async function(req, res){
    // Implement user signup logic
    try{
        await User.create({
            username: req.body.username,
            password: req.body.password
        })
        res.json({msg:"User created successfully"})
    }

    catch(err){
        res.json({msg:"Someting went wrong"})
    }
    
});

router.post('/signin', async function(req, res){
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    if(await User.findOne({
        username: username
    }))
    {
        const token = jwt.sign({
            username: username
        },jwtSecreat);

        res.json({token})
    }
    else{
        res.status(411).jason({msg:"Invalid credentials"})
    }
});

router.get('/courses', userMiddleware, async function (req, res){
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.json({courses: allCourses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username                // now here we require username and from req we are getting bearer token
    const courseId = req.params.courseId                                              // so two wasy to get username : 1) Either verify tiken here , 2) or middleware alreay verified token to middleware se data send krdo idhr using req object
                                                     // we are following 2nd method to folllow DRY priciple.
    //// if you want update data in the array inside the mongodb , you need to use $push
    try{ 
    await User.updateOne({
        username: username },
    {
        '$push':{
            purchagedCourses: courseId
        }
    })
    res.json({msg:"purchage complete"})
    }
    catch(err){
        res.json({msg:"Something went wrong"})
    }
});   
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    console.log(req.username)
    const user = await User.findOne({
        username: req.username
    })
    // console.log(user.purchagedCourses)
    const allCourses = await Course.find({
        _id: {
            "$in": user.purchagedCourses
        }
    })

    res.json({purchaged: allCourses})
});

module.exports = router