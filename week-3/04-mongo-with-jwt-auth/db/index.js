const mongoose = require('mongoose');
const url = require('../keys').DATABASE_URL

// Connect to MongoDB
mongoose.connect(url);

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [
        {
            courseId: Number,
            title: String,
            description: String,
            price: Number,
            imageLink: String,
            published: Boolean
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    courseId: Number,
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}