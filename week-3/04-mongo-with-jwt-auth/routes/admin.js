const { Router } = require("express");
const z = require("zod");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const usernameScehma = z.string();
    const passSchema = z.string().min(6);

    if (usernameScehma.safeParse(username).success && passSchema.safeParse(password).success) {
        await Admin.create({
            username,
            password
        });

        res.json({
            message: "Signed Up successfully"
        });
    } else {
        res.json({
            message: "Invalid username or password"
        });
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;


    Admin.findOne({
        username: username
    }).then((value) => {
        if (value) {
            const token = jwt.sign({ username }, JWT_SECRET);

            res.json({
                token
            });
        } else {
            res.status(411).json({
                message: "Incorrect email and password"
            });
        }
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    Course.create({
        title,
        description,
        imageLink,
        price
    }).then((response) => {
        const id = response._id;
        res.json({
            message: "Course created successfully",
            courseId: id
        });
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    });
});

module.exports = router;