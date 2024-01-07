const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const bodyParser = require("body-parser");
const entities = require("../db/index")

const Course = entities.Course
const User = entities.User

router.use(bodyParser.json())

// User Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username
    const password = req.body.password
    const existingUser = await User.findOne({username: username})
    if(existingUser){
        res.status(403).json({
            message: "User already exist with this username."
        })
        return
    }
    const user = new User({
        username: username,
        password: password
    })
    await user.save()
    res.json({
        message: "User created successfully."
    })
});

router.get('/courses', userMiddleware, async (req, res) => {
    const courses = await Course.find()
    res.json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = parseInt(req.params.courseId)
    const existingCourse = await Course.findOne({id: courseId})
    if(!existingCourse){
        res.status(400).json({
            message: "Invalid course ID"
        })
        return
    }
    const existingUser = await User.findOne({username: req.headers.username})
    const index = existingUser.purchasedCourses.findIndex(course => course.id === courseId)
    if(index!==-1){
        res.json({
            message:"You have already purchased this course."
        })
        return
    }
    existingUser.purchasedCourses.push(existingCourse)
    await existingUser.save()
    res.json({
        message: "Course purchased successfully."
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({username: req.headers.username})
    const purchasedCourses = user.get("purchasedCourses")
    res.json({
        purchasedCourses
    })
});

module.exports = router