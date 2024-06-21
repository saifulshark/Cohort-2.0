const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const db=require("../db")
const Admin=db.Admin
const Course=db.Course
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
    const admin1= new Admin({
       username:username,
       password:password
    })
    await admin1.save()
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const  course1=new Course({
        title,
        description,
        imageLink,
        price
    })
    await course1.save()

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({})
    res.json({
        response
    })
});

module.exports = router;