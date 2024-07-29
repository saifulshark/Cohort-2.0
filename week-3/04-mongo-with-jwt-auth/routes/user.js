const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const z = require("zod");
const jwt = require("jsonwebtoken");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const usernameScehma = z.string();
    const passSchema = z.string().min(6);

    if (usernameScehma.safeParse(username).success && passSchema.safeParse(password).success) {
        User.create({
            username,
            password
        });

        res.json({
            msg: "User created successfully"
        });
    } else {
        res.json({
            msg: "Username or Password not good"
        });
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        username,
        password
    }).then((value) => {
        if (value) {
            const token = jwt.sign({ username }, JWT_SECRET);

            res.json({
                msg: "User signed in",
                token
            });
        } else {
            res.json({
                msg: "Incorrect Username/Password"
            });
        }
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({
        courses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    });

    res.json({
        msg: 'Purchase complete!'
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({ username: username });

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        'purchased Courses': courses
    });
});

module.exports = router