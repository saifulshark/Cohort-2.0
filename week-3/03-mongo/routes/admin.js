const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../db");
const router = Router();
const {Admin}=require("../db/index")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    //finding username in body of post request
    const username=req.body.username;
    const password=req.body.password;
    Admin.create({
        username,
        password,
    })
    res.send("new admin added")
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const username=req.headers.username;
    const password=req.headers.password;
    const title=req.body.title;
    const description=req.body.description;
    const price= req.body.price;
    const imageLink= req.body.imageLink;
    const newCourse=new Course({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink
    })
    newCourse.save()
    res.json({msg:"new course added",
    courseid:newCourse._id})

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const data=await Course.find({})//read all the courses
    res.json(data)
});

module.exports = router;