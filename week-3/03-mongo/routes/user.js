const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index")

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password
    const user = await User.create({
        username,
        password
    })
    res.json({
        message: `User have been created ${user}`
    })

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({})

    res.json({
        message: courses
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router