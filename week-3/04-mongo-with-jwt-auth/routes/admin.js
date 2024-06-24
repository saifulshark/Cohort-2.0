const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin}=require("../db");
const jwtPassword="gauravpadda"
const jwt=require("jsonwebtoken")
const {Course}=require("../db")
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    Admin.create({
        username,
        password
    })
    res.send("new admin created")
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    const data =await Admin.findOne({
        username:username,
        password:password
    })
    if(data){
        const token=jwt.sign({username:username},jwtPassword);
        res.json({
            token:token
    
        })
    }else{
        res.status(403).send("invalid credentials")
    }


});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const token=req.headers.authorization;
    const title=req.body.title
    const description=req.body.description
    const price=req.body.price
    const imageLink=req.body.imageLink
    Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({
        message:"course created successfully"
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses=await Course.find({})
    res.json({
        courses:courses
    })
});

module.exports = router;