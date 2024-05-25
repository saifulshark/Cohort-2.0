const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require('../db/index')
const jwt = require('jsonwebtoken')
const jwtSecreat = require('../config')

// Admin Routes
router.post('/signup', async function(req, res){
    // Implement admin signup logic
    await Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({msg:"Admin created successfully"})
    }
);

router.post('/signin',async function (req, res){
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    if(await Admin.findOne({
        username: username,
        passowrd: password
    }))
    {
        const token = jwt.sign({
            username: username
        },jwtSecreat);

        res.json({token})
    }
    else {
        res.status(411).json({msg:"Invalid credentials"})
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;