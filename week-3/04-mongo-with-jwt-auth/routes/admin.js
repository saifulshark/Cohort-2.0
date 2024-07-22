const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const {
  adminMiddleware,
  userExists,
  isAuthorizedUser,
} = require("../middleware/admin");
const { Admin, Course } = require("../db");
const { jwt_secret } = require("../config");

// Admin Routes
router.post("/signup", userExists, async (req, res) => {
  try {
    const payload = req.body;

    await Admin.create(payload);
    res.send({
      message: "Admin created successfully",
    });
  } catch (error) {
    console.error(error);
    res.send({
      message: "Error while register admin",
    });
  }
});

router.post("/signin", adminMiddleware, async (req, res) => {
  try {
    const payload = req.body;
    const token = jwt.sign(payload, jwt_secret, { expiresIn: "2d" });
    res.send({
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(401).send({
      message: "Invalid credentials",
    });
  }
});

router.post("/courses", isAuthorizedUser, async (req, res) => {
  try {
    const course = req.body;
    const result = await Course.create({ ...course, published: true });
    res.send({
      message: "Course created successfully",
      courseId: result._id,
    });
  } catch (error) {
    res.send({ message: "Error while creating course", error });
  }
});

router.get("/courses", isAuthorizedUser, async (req, res) => {
  try {
    const courses = await Course.find({}, { __v: 0 });
    return res.send({
      courses,
    });
  } catch (error) {
    res.status(400).send({
      message: "Error while fetching courses" + error,
    });
  }
});

module.exports = router;
