const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const {jwtsecret} = require("../config.js");
const jwt = require("jsonwebtoken");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username,
        password
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const find = await Admin.findOne({
        username,
        password
    })
    if(find){
        const token = jwt.sign({
            username: username
        },jwtsecret);
        res.json({
            token
        })
    }else{
        res.status(403).json({
            msg: "invalid usernname or password"
        })
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description= req.body.description;
    const imagelink = req.body.imagelink;
    const price = req.body.price;
    const newCourse = await Course.create({
        title,
        description,
        imagelink,
        price
    })
    res.json({
        msg: "course created successflly",
        CourseID: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const course = await Course.find({});
    res.json({
        course
    })
});

module.exports = router;