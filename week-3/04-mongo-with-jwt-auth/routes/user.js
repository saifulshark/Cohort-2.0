const { Router } = require("express");
const jwt = require("jsonwebtoken")
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");
const {jwtsecret} = require("../config.js");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    })
    res.json({
        msg: "user created done!"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const find = await User.findOne({
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const course = await Course.find({})
    res.json({
        course
    })
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
    })
    res.json({
        message: "Purchase successfull!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({
        username: username
    })
    const purchase = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    console.log(purchase);
    res.json(
        purchase
    )
});

module.exports = router