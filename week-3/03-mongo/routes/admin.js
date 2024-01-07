const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const entities = require("../db/index")
const bodyParser = require("body-parser")

const Course = entities.Course
const Admin = entities.Admin

router.use(bodyParser.json())

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const existingUser = await Admin.findOne({username: username})
    if(existingUser){
        res.status(403).json({
            message: "Admin already exist with this username."
        })
        return
    }
    const admin = new Admin({
        username: username,
        password: password
    })
    await admin.save()
    res.json({
        message: 'Admin created successfully.'
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const id = Math.floor(Math.random()*1000000)
    const course = new Course({
        id: id,
        title: req.body.title,
        description: req.body.description,
        price: parseInt(req.body.price),
        imageLink: req.body.imageLink,
        published: true
    })
    await course.save()
    res.json({
        message: 'Course created successfully.', courseId: id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find()
    res.json({
        courses
    })
});

module.exports = router;