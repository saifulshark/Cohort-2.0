const { Router, request } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  console.log("here");
  const username = req.body.username;
  const password = req.body.password;
  const getExistingUser = await User.findOne({
    username: username,
    password: password,
  });
  if (getExistingUser) {
    res.status(403).send({
      msg: "User Already Exist",
    });
  } else {
    const newUser = new User({
      username: username,
      password: password,
      purchasedCourse: [],
    });
    newUser.save();
    res.status(200).send({
      msg: "User account created",
    });
  }
});

router.get("/courses", (req, res) => {
  Course.find({}).then((courses) => {
    res
      .status(200)
      .send({
        msg: "course List",
        data: courses,
      })
      .catch((err) => {
        res.status(403).send({
          msg: "Error in fetching courses",
        });
      });
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  console.log("here");
  const courseId = req.params.courseId;
  const username = req.headers.username;

  User.updateOne(
    {
      username: username,
    },

    {
      $push: {
        purchasedCourse: courseId,
      },
    }
  ).catch((err) => {
    console.log(err);
  });
  res.status(200).send({
    msg: "Purchase sucessful",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  console.log("heree11");
  const username = req.headers.username;
  const userExist = await User.findOne({
    username: username,
  });
  console.log(userExist.purchasedCourse);

  const courses = await Course.find({
    _id: {
      $in: userExist.purchasedCourse,
    },
  });

  res.status(200).send({
    msg: "purchased course list",
    courses: courses,
  });
});

module.exports = router;
