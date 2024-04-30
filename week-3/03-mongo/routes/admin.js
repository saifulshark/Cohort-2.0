const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();
const { z } = require('zod');


router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })
    
});



// Define a schema for the course data using Zod
const courseSchema = z.object({
    title: z.string().min(1), // Ensure title is a non-empty string
    description: z.string().min(1), // Ensure description is a non-empty string
    imageLink: z.string().url(), // Ensure imageLink is a valid URL
    price: z.number().positive() // Ensure price is a positive number
});

router.post('/courses', adminMiddleware, async (req, res) => {
    try {
        // Validate the incoming request body against the schema
        const courseData = courseSchema.parse(req.body);

        // If validation passes, proceed with course creation logic
        const newCourse = await Course.create(courseData);

        res.json({
            message: 'Course created successfully',
            courseId: newCourse._id
        });
    } catch (error) {
        // If validation fails or any other error occurs, handle it
        res.status(400).json({ error: error.message });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});


module.exports = router;