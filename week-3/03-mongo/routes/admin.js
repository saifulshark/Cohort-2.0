const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  console.log("inside /siginup");
  const username = req.body.username;
  const password = req.body.password;
  const isAdminExist = await Admin.findOne({
    username: username,
    password: password,
  });
  if (isAdminExist) {
    res.status(403).send({
      msg: "Admin username already exist",
    });
  } else {
    const newAdmin = new Admin({
      username: username,
      password: password,
    });
    newAdmin.save();

    res.status(200).send({ msg: "Admin created successfully" });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  const { title, description, price, imageLink } = req.body;

  const newCourse = new Course({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });
  newCourse.save();
  res.status(200).send({
    msg: "New Course Created Sucessfully",
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  Course.find({})
    .then((courses) => {
      res.status(200).send({
        msg: "Course detail",
        data: courses,
      });
    })
    .catch((err) => {
      res.status(403).send({
        msg: "NO any course found",
        err: err,
      });
    });
});

module.exports = router;
