const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.create({ username: username, passwrd: password });
  res.json({ msg: "User created successfully" });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({ response });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const username = req.body.username;
  const courseId = req.params.courseId;
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
