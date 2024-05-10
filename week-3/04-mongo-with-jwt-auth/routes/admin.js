const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../../04-mongo-with-jwt-auth/db");
const jwt = require('jsonwebtoken')
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username
    const password = req.headers.password
    await Admin.create({
        username,
        password
    })
    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username
    const password = req.headers.password

    const admin = await Admin.findOne(
        {username,
        password}
    )
    if(admin){
        const token = jwt.sign({username}, 'secret')
        res.json({
            token
        })
    }
    else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const course  = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: 'Course created successfully', courseId: course._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Admin.find({
        
    })
    res.json({
        courses
    })
});

module.exports = router;