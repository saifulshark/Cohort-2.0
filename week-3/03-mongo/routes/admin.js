const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  try {
    await Admin.create({
      username,
      password,
    });

    res.status(201).json({
      msg: "Admin created successfully",
    });
  } catch (e) {
    return res.status(404).json({
      msg: "Signup error",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  try {
    const response = await Course.create({
      title,
      description,
      price,
      imageLink,
    });
    //console.log(response);

    res.status(201).json({
      msg: "Course created successfully",
      courseId: response._id,
    });
  } catch (e) {
    return res.status(404).json({
      msg: "Course error",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
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

module.exports = router;

