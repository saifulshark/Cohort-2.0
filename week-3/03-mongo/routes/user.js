const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
// User Routes
router.post("/signup", async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    const response = await User.create({
        username: username,
        password: password,
    });
    if (response) {
        res.json({
            message: "User created successfully",
        });
    } else {
        res.json({
            message: "User already exists",
        });
    }
});


router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    if (courses) {
        res.json({
            courses: courses,
        });
    } else {
        res.json({
            message: "No courses found",
        });
    }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;
    await User.updateOne(
        {
            username: username,
        },
        {
            $push: {
                purchasedCourses: courseId,
            },
        }
    );
    res.json({
        message: "Purchase complete!",
    });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({ username: username });
    const courses = await Course.find({ _id: { $in: user.purchasedCourses } });
    res.json({
        courses: courses,
    });
});

module.exports = router;
