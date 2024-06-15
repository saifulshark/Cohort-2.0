const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    
    const existingUser = await User.findOne({ username: username })

    if(existingUser){
        res.status(403).send('user already exists');
        return;
    }

    const user = new User({
        username: username,
        password: password
    })

    await user.save();
    res.json({
        msg: 'Admin created successfully'
    });

});

router.get('/courses',userMiddleware, async (req, res) => {
    try{
        const courses = await Course.find();
        res.status(200).json({ courses });
    } catch(e){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
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
    const { username, password } = req.headers;
    const user = await User.findOne({ username, password }).populate('purchasedCourses');
    if (!user) return res.status(401).json({ message: 'Unauthorized' });

    res.json({ purchasedCourses: user.purchasedCourses });
});

module.exports = router