const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const secret = require("../config.env");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  try {
    await Admin.create({
      username,
      password,
    });
    res.status(201).json({
      msg: "Admin Created successfully",
    });
  } catch (e) {
    res.status(404).json({
      msg: "signup error",
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await Admin.findOne({
      username,
      password,
    });

    if (user) {
      const token = jwt.sign(
        {
          username,
        },
        secret,
      );

      res.status(200).json({
        token,
      });
    } else {
      res.status(411).json({
        msg: "Incorrect email and password",
      });
    }
  } catch (e) {
    res.status(404).json({
      msg: "signin error",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  try {
    const course = await Course.create({
      title,
      description,
      price,
      imageLink,
    });
    res.status(201).json({
      msg: "Course created successfully",
      courseId: course._id,
    });
  } catch (e) {
    res.status(404).json({
      msg: "adding course errror",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find({});
    res.status(200).json({
      courses: courses,
    });
  } catch (e) {
    res.status(404).json({
      msg: "fetching course error",
    });
  }
});

module.exports = router;

