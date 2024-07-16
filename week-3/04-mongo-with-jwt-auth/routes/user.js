const { Router } = require("express");
const { User, Course } = require("../db/index");
const router = Router();
const jwt = require("jsonwebtoken");
const jwtPassword = "secret_test";
const validateJWT = require("../middleware/validatejwt");
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        msg: "Username and password are required",
      });
    }
    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
      return res.status(400).json({
        msg: "User already exists",
      });
    }

    const user = new User({
      username: username,
      password: password,
    });

    await user.save();

    return res.status(201).json({
      msg: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  const userInDB = await User.findOne({
    username: username,
    password: password,
  });

  if (userInDB) {
    const token = jwt.sign({ username }, jwtPassword);

    return res.status(200).json({
      token: token,
    });
  }

  return res.json({
    msg: "Wrong username and password",
  });
});

router.get("/courses", validateJWT, async (req, res) => {
  // Implement listing all courses logic

  try {
    const response = await Course.find({});
    return res.status(200).json({
      courses: response,
    });
  } catch (error) {
    return res.json({
      msg: "Invalid token",
    });
  }
});

router.post("/courses/:courseId", userMiddleware, validateJWT, async (req, res) => {
    // Implement course purchase logic
    try {
      const username = req.headers.username;
      const courseId = req.params.courseId;

      await User.updateOne(
        {
          username: username,
        },
        {
          $push: { purchasedCourses: courseId },
        }
      );
      res.status(201).json({
        msg: "Course purchased successfully",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Internal server error",
      });
    }
  }
);

router.get("/purchasedCourses", userMiddleware, validateJWT, async (req, res) => {
    // Implement fetching purchased courses logic
    
    const user = await User.findOne({
      username: req.headers.username,
    });

    const courses = await Course.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });

    res.json({
      courses: courses,
    });
  }
);

module.exports = router;
