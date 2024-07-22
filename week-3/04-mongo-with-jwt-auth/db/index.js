const mongoose = require("mongoose");

const connect = () => {
  // Connect to MongoDB
  mongoose
    .connect("mongodb+srv://admin:Admin%401234@cluster0.ax6thb7.mongodb.net/")
    .then((res) => {
      console.info("Mongo Connection successfull");
    })
    .catch((err) => {
      console.error("Error in mongo connection"+err);
    });
};

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  purchasedCourses: Array,
});
// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
  connect
};
