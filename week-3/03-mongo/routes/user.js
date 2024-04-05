const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User, Course } = require('../db')

// User Routes
router.post('/signup', (req, res) => {
    const { username, password } = req.body
    User.create({
        username,
        password
    })
    res.json({ msg: "User Created Successfully" })
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
    console.log(user.purchasedCourses)
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({ courses })
});


module.exports = router