const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const z = require('zod');

// Zod Schemas
const usernameSchema = z.string().email();
const passwordSchema = z.string().min(6);
const titleDescSchema = z.string();
const priceSchema = z.number();
const imageLinkSchema = z.string().url();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const usernameParse = usernameSchema.safeParse(username);
    const passwordParse = passwordSchema.safeParse(password);

    if (!usernameParse.success || !passwordParse.success) {
        res.status(422).send("Incorrect body values");
        return;
    }

    const user = await Admin.findOne({ username: username }).exec();
    if (user) {
        res.status(409).send("Admin username already exists");
    }
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: 'Admin created successfully'
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    // zod validation
    const titleParse = titleDescSchema.safeParse(title);
    const descriptionParse = titleDescSchema.safeParse(description);
    const imageLinkParse = imageLinkSchema.safeParse(imageLink);
    const priceParse = priceSchema.safeParse(price);

    if (!titleParse.success || !descriptionParse.success || !imageLinkParse.success || !priceParse.success) {
        res.status(422).send("Incorrect body values");
        return;
    }

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find().exec();
    res.json({
        courses
    })
});

module.exports = router;