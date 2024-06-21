const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username=req.body.username
    const password=req.body.password
    const newuser=new User({
        username:username,
        password:password
    })
    await newuser.save()
    res.json({
        msg:"user created Successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
    const userexists= await User.findOne({
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

router.get('/courses', userMiddleware,async (req, res) => {
    // Implement listing all courses logic
    const response=await Course.find({})
    res.json({
        course:response
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const token=req.headers.authorization
    const parts=token.split(" ")
    const rtoken=parts[1];
     const decoded=jwt.decoded(rtoken)
     const username=decoded.username
    const Id=req.params.courseId
    await User.UpdateOne({username:username},{
        "$push":{
            purchasedCourse:Id
        }
    })
    res.json({
        msg:"Course Purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const token=req.headers.authorization
    const parts=token.split(" ")
    const rtoken=parts[1];
     const decoded=jwt.decoded(rtoken)
     const username=decoded.username
     const user = await User.findOne({
        username: username
    });
    const response=await Course.find({
        _id:{
            "$in":user.purchasedCourse
        }
})
res.json({
    courses: response
})
});

module.exports = router