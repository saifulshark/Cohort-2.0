const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db');

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    try {
        const username = req.headers.username;
        const password = req.headers.password;

        if (!username || !password) throw new Error("input invalid");
        console.log(username, password)
        User.create({ username, password });
        return res.json({ msg: "User created successfully" });
    } catch {
        return res.status(500).json({ msg: "something went wrong" });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});

    return res.json({ courses });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({ username }, { '$push': { courses: courseId } });
    return res.json({ msg: "successfully purchased" });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const courses = await User.find({}).populate('courses');
    return res.json({ courses });
});

module.exports = router
