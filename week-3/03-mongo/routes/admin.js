const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check that the user is already exist or not
    Admin.create({
        username: username,
        password: password
    })
    .then(()=>{
        res.json({
            message: "Admin created successfully!"
        })
    })
    .catch(()=>{
        res.status(500).send("Database problem");
    })

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {title,description,imageLink,price} = req.body;

    Course.create({
        title,
        description,
        imageLink,
        price
    })
    .then((data)=>{
        res.json({
            msg: "course created successfully!",courseId: data._id
        })
    })
    .catch(()=>{
        res.status(500).send("Database problem");
    })
    
}); 

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find()
    .then((data)=>{
        res.json({
            courses: data
        });
    })
    .catch(()=>{
        res.status(500).send("unable to find course");
    })
});

module.exports = router;