const { Router } = require("express");
const router = Router();
const { adminMiddleware, userExists } = require("../middleware/admin");
const { Admin, Course } = require("../db");

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

router.post("/courses", adminMiddleware, async (req, res) => {
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

router.get("/courses", adminMiddleware, async (req, res) => {
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
