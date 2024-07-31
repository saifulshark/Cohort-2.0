const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jwt");
const JWT_SECRET = require("../index");
const { User } = require("../solution/db");
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const isvalid = await Userfind({
        username, password
    })
    if (isvalid) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
    }
    else {
        res.status(411).json({
            msg: "not the user"
        })
    }
});
router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;