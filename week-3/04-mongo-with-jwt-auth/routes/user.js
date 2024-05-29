const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index')
const jwt = require('jsonwebtoken')
const jwt_secret = require('../config') //98765
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.headers;
        const existing = await User.findOne({ username, password })
        if(existing){
            res.status(403).json({
                message: "User already exists"
            })
            return;
        }
        const token = jwt.sign({ username }, jwt_secret)
        const user = new User({
            username,
            password,
            token
          });
        
        await user.save();
        res.json({
            message: "User created successfully"
        })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username= req.headers.username
    const password= req.headers.password
    const user = await User.findOne({ username, password })
    if(user){
        const token = user.token
        res.json({
            token
        })
    } else{
        res.status(411).json({
            message: "Invalid email and password"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const courses = await Course.find({});
        res.json({ courses });
      } catch (e) {
        res.status(500).json({ message: "Internal Server error" });
      }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
        const courseId = req.params.courseId;
        const course = await Course.findOne({ courseId });
        if (!course) return res.status(404).json({ message: 'Course not found' });
        const user = await User.findOne({ username: req.headers.username });
        if (!user) return res.status(401).json({ message: 'Unauthorized' });
        const isPurchased = user.purchasedCourses.some(
            (purchasedCourse) => purchasedCourse.toString() === course._id.toString()
          );
      
          if (isPurchased) {
            return res.status(400).json({ message: 'Course already purchased' });
          }
        user.purchasedCourses.push(course._id);
        await user.save();
        res.json({ message: 'Course purchased successfully' });
    
        } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
        }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const { username, password } = req.headers;
    const user = await User.findOne({ username, password }).populate('purchasedCourses');
    if (!user) return res.status(401).json({ message: 'Unauthorized' });

    res.json({ purchasedCourses: user.purchasedCourses });
});

module.exports = router