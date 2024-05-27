const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require('../db/index')
const jwt = require('jsonwebtoken')
const jwtSecreat = require('../config')

// Admin Routes
router.post('/signup', async function(req, res){
    // Implement admin signup logic
    await Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({msg:"Admin created successfully"})
    }
);

router.post('/signin',async function (req, res){
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    if(await Admin.findOne({
        username: username,
        password: password
    }))
    {
        const token = jwt.sign({
            username: username
        },jwtSecreat);

        res.json({token})
    }
    else {
        res.status(411).json({msg:"Invalid credentials"})
    }
});

router.post('/courses', adminMiddleware, async function (req, res) {
    // Implement course creation logic
    const newCourse = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    })
    res.json({msg:"Course created successfully",courseId: newCourse._id})
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});  
    res.json({courses:allCourses});      // agr directly ({allCourses}) send kareege to error aayegi coaz we are directly sending mongodb object , so {courses: all courses} - converts it into json and removes error
});

module.exports = router;