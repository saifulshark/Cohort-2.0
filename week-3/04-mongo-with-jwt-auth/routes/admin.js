const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db")
const jwt = require("jsonwebtoken");
const inputMiddleware = require("../middleware/input");
const secretServerKey = require("../keys").SERVER_SECRET_KEY

// Admin Routes
router.post('/signup', inputMiddleware,async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const existingUser = await Admin.findOne({username: username})
    if(existingUser){
        res.status(403).json({
            message: "Admin already exist with this username."
        })
        return
    }
    const admin = new Admin({
        username: username,
        password: password
    })
    await admin.save()
    res.json({
        message: "Admin account created successfully."
    })
});

router.post('/signin', inputMiddleware,async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const existingUser = await Admin.findOne({username: username})
    if(!existingUser){
        res.status(403).json({
            message: "Invalid credentials."
        })
        return
    }
    const token = jwt.sign({
        username: username
    },secretServerKey)
    res.json({
        token
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    const courseId = Math.floor(Math.random()*1000000)
    const course = new Course({
        courseId : courseId,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
        published: true
    })
    await course.save()
    res.json({
        message: "Course created successfully",
        courseId: courseId
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const courses = await Course.find()
    res.json({
        courses
    })
});

module.exports = router;