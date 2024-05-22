const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.create({
        username,
        password
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const coursetitle = req.body.coursetitle;
    const coursedescription = req.body.coursedescription;
    const courseprice = req.body.courseprice;
    const imagelink = req.body.imagelink;
    Course.create({
        coursetitle,
        coursedescription,
        courseprice,
        imagelink
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    res.send(Course.find({}));
});

module.exports = router;