const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
const JWTPASSWORD = require('../config')

const { Admin, Course, User } = require('../db/index');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    console.log("signing up");
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({ username, password })

    return res.json({ message: "Admin created successfully" });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    console.log("passkey", JWTPASSWORD);
    const username = req.body.username;
    const password = req.body.password;

    if (await Admin.findOne({ username, password })) {
        const jwtToken = jwt.sign({ username }, JWTPASSWORD);
        return res.json({ token: jwtToken });
    } else {
        return res.status(411).json({ message: "Invalid credentials" });
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic

    return res.json({ "hello": "world" });
});

module.exports = router;
