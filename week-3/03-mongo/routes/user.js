const { Router } = require("express");
const router = Router();
const {User, Course} = require('../db/index');
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check that the user is already exist or not
    User.create({
        username: username,
        password: password
    })
    .then(()=>{
        res.json({
            message: "User created successfully!"
        })
    })
    .catch(()=>{
        res.status(500).send("Database problem");
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find()
    .then((data)=>{
        res.json({
            courses: data
        });
    })
    .catch(()=>{
        res.status(500).send("unable to find course");
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourses: new mongoose.Types.ObjectId(courseId)
        }
    })
    .catch((e)=>{
        console.log(e);
    })
    res.json({
        message: "purchased complete"
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    },)
    
    const course = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses: course
    })
});

module.exports = router