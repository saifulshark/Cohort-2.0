const { Router } = require("express");
// const express = require("express");

const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
// router.use(express.json());
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const newAdmin = new Admin({
        username: username,
        password: password
    });
    await Admin.create(newAdmin);
    res.json({
        msg: "Admin created"
    })


});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = new Course({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    await Course.create(newCourse);
    res.json({
        msg: "course created"
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses laogic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })

});

module.exports = router;