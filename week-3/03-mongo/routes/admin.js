const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username,
        password
    })
    res.status(200).json({
        message: "Admin created successful"
    });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, imageLink, price } = req.body;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    });
    res.status(200).json({
        message: "Course created successfully", courseID : newCourse._id
    });
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({}).then(courses => {
        res.status(200).json({
            courses
        });
    });
});

module.exports = router;