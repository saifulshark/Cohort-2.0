const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        const username = req.headers.username;
        const password = req.headers.password;

        if (!username || !password) throw new Error("empty username or password");

        await Admin.create({ username: username, password: password });
        return res.json({ msg: "admin created successfully" });
    } catch {
        return res.status(500).json({ msg: "something went wrong" });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        const title = req.body.title;
        const description = req.body.description;
        const price = req.body.price;
        const imageLink = req.body.imageLink;

        if (!title || !description) throw new Error("title or description empty");

        const course = await Course.create({ title, description, price, imageLink, published: true });
        return res.json({ msg: "Course created successfully", courseId: course._id });
    } catch {
        return res.status(500).json({ msg: "something went wrong" });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find({});
        return res.json({ courses });
    } catch {
        return res.status(500).json({ msg: "something went wrong" });
    }
});

module.exports = router;
