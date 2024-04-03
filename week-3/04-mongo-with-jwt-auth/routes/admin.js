const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { estimateGas } = require("web3/lib/commonjs/eth.exports");
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "Admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  const username = req.body.username;
  const password = req.body.password;

  const alreadyExist = Admin.findOne({ username, password });
  if (alreadyExist) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "Incorrect email and password",
    });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const newCourse = Course.create({
    title,
    description,
    price,
    imageLink,
  });
  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const resposne = await Course.find({});
  res.json({
    courses: resposne,
  });
});

module.exports = router;
