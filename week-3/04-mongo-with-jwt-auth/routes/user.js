const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();

const { userMiddleware, isAuthorizedUser } = require("../middleware/user");
const { User, Course } = require("../db");
const { jwt_secret } = require("../config");

router.post("/signup", async (req, res) => {
  try {
    const payload = req.body;
    const user = await User.create({ ...payload, purchasedCourses: [] });
    res.send({ message: "User created successfully" });
  } catch (error) {
    res.status(400).send({ message: "Error while creating user" });
  }
});

router.post("/signin", userMiddleware, async (req, res) => {
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

router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find({}, { __v: 0 });
    res.send({ courses });
  } catch (error) {
    res.status(400).send({ message: "Invalid request" });
  }
});

router.post("/courses/:courseId", isAuthorizedUser, async (req, res) => {
  try {
    const username = req.headers["username"];

    const courseId = req.params.courseId;

    await User.updateOne(
      { username },
      { $addToSet: { purchasedCourses: courseId } }
    );
    res.send({ message: "Course purchased successfully" });
  } catch (error) {
    console.error(error);
    res.send({ message: "Error while purchasing course" });
  }
});

router.get("/purchasedCourses", isAuthorizedUser, async (req, res) => {
  const username = req.headers["username"];
  const userPurchacedCourses = await User.findOne(
    { username },
    { purchasedCourses: 1, _id: 0 }
  );
  const purchasedCourses = await Course.find({
    _id: { $in: userPurchacedCourses?.purchasedCourses },
  },
    { __v: 0 });
  res.send({
    purchasedCourses,
  });
});

module.exports = router;
