const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  try {
    await User.create({
      username,
      password,
    });

    res.status(201).json({
      msg: "User created successfully",
    });
  } catch (e) {
    return res.status(404).json({
      msg: "Signup error",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const response = await Course.find({});
    res.status(200).json({
      courses: response,
    });
  } catch (e) {
    res.status(404).json({
      msg: "Course error",
    });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const courseId = req.params.courseId;
  try {
    await User.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourse: courseId,
        },
      },
    );
    res.status(201).json({
      msg: "Course purchased successfully",
    });
  } catch (e) {
    return res.status(404).json({
      msg: "Course purchased error",
    });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findOne({
      username: req.headers.username,
    });

    console.log(user.purchasedCourse);

    const courses = await Course.find({
      _id: {
        $in: user.purchasedCourse,
      },
    });
    res.status(200).json({
      courses: courses,
    });
  } catch (e) {
    return res.status(404).json({
      msg: "Fetching course error",
    });
  }
});

module.exports = router;

