const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const {User, Course} = require("../db");
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

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    username = req.body.username;
    password = req.body.password;
    const response = await User.findOne({username: username, password: password});   
    if(response)    
    {
        res.status(200).json({
            msg: "User signed in successfully",
            token: "Bearer "+ jwt.sign({username: username}, SECRET_KEY),
        });
    }      
    else{
        res.status(400).json({
            msg: "User sign in failed, try again",
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

module.exports = router