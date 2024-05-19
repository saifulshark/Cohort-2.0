const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    })
    res.status(200).json({
        message: "User created successful"
    });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then(courses => {
        res.status(200).json({
            courses
        });
    });
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username : username
    },{
        "$push": {
            "purchasedCourse": courseId
        }
    })
    res.json({
        msg : "Purchase Complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    const user = await User.findOne({
        username : username
    })

    console.log(user.purchasedCourse);

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourse
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router