const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const {Admin,Course}= require("../db"); 

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    const check= await Admin.findOne(
        {
            username,
            password
        }
    )
    if(check){
        res.json({
            msg:"admin already exist"
        })
    }
    else{
        await Admin.create({
            username,
            password
        })
        res.json({
            msg:"ADMIN CREATED SUCCESSFULy"
        })
    }


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try{const title=req.body.title;
    const description=req.body.description;
    
    const imageLink=req.body.imageLink;
    const price=req.body.price;

    const newcourse =await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message:"Course created succufill",
        course_id:newcourse._id
    })}
    catch(error){
        res.json({
            msg:"thers is an error"
        })
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const ans= await Course.find({});
    try{if(ans){
        res.json({
            courses:ans
        })
        }
        else{
            res.status(404).send("no courses found")
        
        }
    }
    catch(err){
        res.json({
            msg:"there is an error"
        })
    }
    
});

module.exports = router;