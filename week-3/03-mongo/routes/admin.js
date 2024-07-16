const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  const existingAdmin = await Admin.findOne({
    username: username
  });

  if (existingAdmin) {
    return res.json({
      msg: "you already have an Admin account",
    });
  }

  const admin = new Admin({
    username: username,
    password: password,
  });

  await admin.save();
  return res.status(200).json({
    msg: "Admin account successfuly created",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const { title, description, price, imageLink } = req.body;

  const existingCourse = await Course.findOne({ title: title });

  if (existingCourse) {
    return res.json({
      msg: "course is already created",
    });
  }
  const course = await Course({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });

  await course.save();

  return res.json({
    courses: course,
    courseId: course.id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

module.exports = router;
