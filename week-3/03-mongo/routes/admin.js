const { Router } = require("express");
// import {Admin,Course} from "../db";
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();
// router.use(adminMiddleware);
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    Admin.create({
        username:username,
        password:password
    }).then(()=>{
        res.json({message:"Admin created successfully"});
    })

    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    }).then((course)=>{
        res.json({message:"Course created successfully",courseId:course._id});
    })
});

router.get('/courses', adminMiddleware, async( req, res) => {
    // Implement fetching all courses logic
    const courses=await Course.find({});
    res.json({courses:courses});
});

module.exports = router;