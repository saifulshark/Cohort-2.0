const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const jwt = require('jsonwebtoken')

const { User, Course } = require('../db')

// User Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    await User.create({
        username,
        password
    })
    res.json({ message: 'User created successfully' })
});

router.post('/signin', (req, res) => {
    const { username, password } = req.body
    User.findOne({
        username,
        password
    })
    .then((value) => {
        if (value) {
            const signedJwt = jwt.sign({ username, password }, process.env.JWT_PASSWORD)
            res.json({ token: signedJwt })
        } else {
            res.status(403).json({
                msg: "User doesn't exist"
            })
        }
    })
});

router.get('/courses', userMiddleware, async (req, res) => {
    const courses = await Course.find({})
    res.json({ courses })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const { username } = req.headers
    const { courseId } = req.params
    await User.updateOne({
        username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({ msg: "Purchase Complete" })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const { username } = req.headers
    const user = await User.findOne({
        username
    })
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({ courses })
});


module.exports = router