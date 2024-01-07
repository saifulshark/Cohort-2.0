const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const inputMiddleware = require("../middleware/input");
const {User, Course} = require("../db")
const jwt = require("jsonwebtoken")
const secretServerKey = require("../keys").SERVER_SECRET_KEY

// User Routes
router.post('/signup', inputMiddleware, async(req, res) => {
    const username = req.body.username
    const password = req.body.password
    const existingUser = await User.findOne({username: username})
    if(existingUser){
        res.status(403).json({
            message: "User with this username already exist."
        })
        return
    }
    const user = new User({
        username: username,
        password: password
    })
    await user.save()
    res.json({
        message:"User created successfully."
    })
});

router.post('/signin', inputMiddleware, async (req, res) => {
    const existingUser = await User.findOne({username: req.body.username})
    if(!existingUser){
        res.status(403).json({
            message:"Invalid credentials."
        })
        return
    }
    const token = jwt.sign({
        username: req.body.username
    }, secretServerKey)

    res.json({
        token
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
    const existingCourse = await Course.findOne({courseId : courseId})
    if(!existingCourse){
        res.status(404).json({
            message:"Course with this id doesn't exist."
        })
        return
    }
    const token = req.headers.authorization.split(' ')[1]
    const username = jwt.decode(token).username
    const user = await User.findOne({username: username})
    const index = user.purchasedCourses.findIndex(course => course.courseId===courseId)
    if(index!==-1){
        res.status(400).json({
            message: "You have already purchased this course."
        })
        return
    }
    user.purchasedCourses.push(existingCourse)
    await user.save()
    res.json({
        message: "Course purchased successfully."
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    const username = jwt.decode(token).username
    const user = await User.findOne({username: username})
    const purchasedCourses = user.purchasedCourses
    res.json({
        purchasedCourses
    })
});

module.exports = router