const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const secret = require("../config.env");
const jwt = require("jsonwebtoken");
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
      username,
      password,
    });
    res.status(201).json({
      msg: "User created successfully",
    });
  } catch (e) {
    res.status(404).json({
      msg: "signup error",
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  try {
    const username = req.body.username;
    const password = req.body.password;

    const find = User.findOne({
      username,
      password,
    });

    if (find) {
      const token = jwt.sign({ username }, secret);
      res.status(200).json({
        token: token,
      });
    } else {
      res.status(404).json({
        msg: "User doesn't exist",
      });
    }
  } catch (e) {
    res.status(404).json({
      msg: "sigin error",
      error: e.stack,
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    res.status(200).json({
      courses: courses,
    });
  } catch (e) {
    res.status(404).json({
      msg: "courses error",
    });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const username = req.username;
    const courseId = req.params.courseId;

    await User.updateOne(
      {
        username,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      },
    );
    res.status(201).json({
      msg: "Course purchased successfully",
    });
  } catch (e) {
    res.status(404).json({
      msg: "purchase error",
    });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const username = req.username;
    const user = await User.findOne({
      username,
    });
    const courses = await Course.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });
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

