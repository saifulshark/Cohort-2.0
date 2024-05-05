const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt=require("jsonwebtoken")
const jwtSecret="dbsjnxkams"

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.headers.username
    const password=req.headers.password
    Admin.create({username:username,password:password})
    res.json({msg:"Admin "+username+" added to db"})
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username=req.headers.username
    const password=req.headers.password
    let findresult=Admin.findOne({username:username})
    if(findresult)
    {
        let token=jwt.sign({username:username,password:password},jwtSecret)
        res.json({token:token})
    }
    else{
        res.status(404).json({msg: "Admin "+username+" not present in the db"})
    }


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title=req.body.title
    const description=req.body.description
    const price=req.body.price
    const imageLink=req.body.imageLink
    let courceCreateResult=await Course.create({title:title,description:description,price:price,imageLink:imageLink})
    res.json({msg: "New course - "+courceCreateResult._id+" created"})

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    let courses=await Course.find({})
    res.json({courses:courses})
});

module.exports = router;