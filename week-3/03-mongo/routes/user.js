const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

router.post("/signup", async (req, res) => {
  try {
    const payload = req.body;
    const user = await User.create({ ...payload, purchasedCourses: [] });
    res.send({ message: "User created successfully" });
  } catch (error) {
    res.status(400).send({ message: "Error while creating user" });
  }
});

router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find({},{__v:0});
    res.send({ courses });
  } catch (error) {
    res.status(400).send({ message: "Invalid request" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
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

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.headers["username"];
  const userPurchacedCourses = await User.findOne(
    { username },
    { purchasedCourses:1 ,_id:0}
  );
  const purchasedCourses = await Course.find({
    _id: { $in: userPurchacedCourses?.purchasedCourses },
  },
{__v:0});
  res.send({
    purchasedCourses,
  });
});

module.exports = router;
