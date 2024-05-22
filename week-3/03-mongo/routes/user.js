const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    User.create({
        username,
        password
    })
    res.json({
        msg : "The user has been successfully created "
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.findall({});
    res.send(response);
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseID = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username : username
    },{
        "$push" : {
            purchasedCourses : courseID
        }
    })
    res.json({
        msg : "Course Has been purchased Sucessfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router