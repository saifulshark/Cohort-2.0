const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course}=require("../db")
const router = Router();
const JWT_SECRET="1234"

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
    const newuser=new Admin({
        username:username,
        password:password
    })
    await newuser.save()
    res.json({
        msg:"Admin created Successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
    const userexists= await Admin.findOne({
        username:username,
        password:password
    })
    if(userexists)
    {
       const token=jwt.sign({username},JWT_SECRET)
       res.json({
        token:token
       })
    }
    else
    {
       res.json({
        msg:"Invalid user"
       })  
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const course1=req.body
    const course11=new Course(course1)
    await course11.save() 
    res.json({
        msg:"Course created successfully",
        courseId:course11._id
    }) 
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response= await Course.find({} )
    res.json({
        courses:response
    })
});

module.exports = router;