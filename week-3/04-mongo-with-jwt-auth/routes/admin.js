const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();


const jwt = require('jsonwebtoken')

const { Admin, Course } = require('../db')

// Admin Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    await Admin.create({
        username,
        password
    })
    res.json({ message: 'Admin created successfully' })
});

router.post('/signin', (req, res) => {
    const { username, password } = req.body
    Admin.findOne({
        username,
        password
    })
    .then((value) => {
        if (value) {
            const signedJwt = jwt.sign({ username, password }, process.env.JWT_PASSWORD)
            res.json({ token: signedJwt })
        } else {
            res.status(403).json({
                msg: "Admin doesn't exist"
            })
        }
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, price, imageLink } = req.body
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({ message: 'Course created successfully', courseId: newCourse._id })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find({})
    res.json({ courses })
});

module.exports = router;