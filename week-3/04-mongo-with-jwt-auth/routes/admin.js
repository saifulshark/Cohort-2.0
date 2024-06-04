const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();
const jwt = require('jsonwebtoken');
const { jwt_secret } = require("../config")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
        const { username, password } = req.headers;
        const existing = await Admin.findOne({ username, password })
        if(existing){
            res.status(403).json({
                message: "User already exists"
            })
            return;
        }
        const token = jwt.sign({ username }, jwt_secret)
        const admin = new Admin({
            username,
            password,
            token
          });
        
        await admin.save();
        res.json({
            message: "Admin created successfully"
        })
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username= req.headers.username
    const password= req.headers.password
    const admin = await Admin.findOne({ username, password })
    if(admin){
        const token = admin.token
        res.json({
            token
        })
    } else{
        res.status(411).json({
            message: "Invalid email and password"
        })
    }
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink, published } = req.body;
    const courseId = Math.floor(Math.random() * 1000000);

    const isCoursePresent = await Course.findOne({ title });
    if (isCoursePresent) {
        res.status(403).json({
        msg: "Course already exists",
    });
    }

    const course = new Course({
    courseId,
    title,
    description,
    price,
    imageLink,
    published,
    });

    await course.save();
    res.json({
    message: "Course created successfully",
    courseId,
    });

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find({});
        res.json({ courses });
      } catch (e) {
        res.status(500).json({ message: "Internal Server error" });
      }
});

module.exports = router;