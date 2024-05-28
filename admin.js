const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");
// Admin Routes
router.post('/signup', async(req, res) => {
    const username= req.body.username;
    const password= req.body.password;
    const newadmin= new Admin({
        username:username,
        password:password
    })
    try{
        const alreadyexists=await Admin.findOne({username:username});
        if (!alreadyexists){
            newadmin.save().then(res.json({message:"Admin created successfully"}))
        } else{
            res.json({message:"admin already exists"})
        }
    } catch(err){
        res.json({msg:"incorrect inputs"})
    }
    // Implement admin signup logic
});

router.post('/signin', async(req, res) => {
    const username= req.body.username;
    const password= req.body.password;
    try{
        const exists= await Admin.findOne({username:username,password:password})
        if (exists){
            const token= jwt.sign(username,JWT_SECRET)
            res.json({token:token})
        }else{
            res.json({message:"unauthorized"})
        }
    }catch(err){
        res.json({message:"invalid inputs"})
    }
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, async(req, res) => {
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imageLink=req.body.imageLink;
    const newcourse =new Course({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink
    })
    newcourse.save().then(res.json({message:"Course created successfully",courseId:newcourse._id}))
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, async(req, res) => {
    Course.then((response)=>{
        response.then((finaldata)=>{
            res.json(finaldata)
        })
    })
    // Implement fetching all courses logic
});

module.exports = router;