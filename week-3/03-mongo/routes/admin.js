const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    username = req.body.username;
    password = req.body.password;
    const data = await Admin.create({
        username: username,
        password: password,
    });
    if(data)
    {
        res.status(200).json({
            msg: "Admin created successfully",
        });
    }
    else{
        res.status(400).json({
            msg: "Admin creation failed, try again",
        });
    }
    
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    title = req.body.title;
    description = req.body.description;
    price = req.body.price;
    imageLink = req.body.imageLink;
    const course = await Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
    });
    if(course)
    {
        res.status(200).json({
            msg: "Course created successfully",
            courseID: course._id,
        });
    }
    else{
        res.status(400).json({
            msg: "Course creation failed, try again",
        });
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({
        courses
    });
});

module.exports = router;