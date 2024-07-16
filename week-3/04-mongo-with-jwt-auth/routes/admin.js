const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret_test";
const validateJWT = require("../middleware/validatejwt");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        msg: "Username and password are required",
      });
    }
    const existingAdmin = await Admin.findOne({ username: username });

    if (existingAdmin) {
      return res.status(400).json({
        msg: "Admin already exists",
      });
    }

    const admin = new Admin({
      username: username,
      password: password,
    });

    await admin.save();

    return res.status(201).json({
      msg: "Admin created successfully",
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

  const adminInDB = await Admin.findOne({
    username: username,
    password: password,
  });

  if (adminInDB) {
    const token = jwt.sign({ username }, jwtPassword);

    return res.status(200).json({
      token: token,
    });
  }

  return res.json({
    msg: "Wrong username and password",
  });
});

router.post("/courses", adminMiddleware, validateJWT, async (req, res) => {
  // Implement course creation logic
  try {
    const { title, description, price, imageLink } = req.body;

    const existingCourse = await Course.findOne({ title: title });

    if (existingCourse) {
      return res.status(400).json({
        msg: "Course is already created",
      });
    }

    const course = new Course({
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
    });

    await course.save();

    return res.status(201).json({
      msg: "Course created successfully",
      course: course,
      courseId: course.id,
    });
    
  } catch (error) {
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
});

router.get("/courses", adminMiddleware, validateJWT, async (req, res) => {
  // Implement fetching all courses logic
  
  try {
    const response = await Course.find({});
    return res.status(200).json({
      courses: response,
    });

  } catch (error) {
    return res.status(500).json({
       msg: "Internal server error" 
      });
  }
});

module.exports = router;
