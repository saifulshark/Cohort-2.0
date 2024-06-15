const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  const existingUser = await Admin.findOne({ username: username });

  if (existingUser) {
    res.status(403).send("admin already exists");
    return;
  }

  const admin = new Admin({
    username: username,
    password: password,
  });

  admin.save();
  res.json({
    msg: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink, published } = req.body;
  const courseId = Math.floor(Math.random() * 1000000);

  const isCoursePresent = await Course.findOne({ title });
  if (isCoursePresent) {
    res.status(403).json({
      msg: "Course already exists",
    });
  }

  const course = new Course({
    courseId,
    title,
    description,
    price,
    imageLink,
    published,
  });

  await course.save();
  res.json({
    message: "Course created successfully",
    courseId,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json({ courses });
  } catch (e) {
    res.status(500).json({ message: "Internal Server error" });
  }
});

module.exports = router;
