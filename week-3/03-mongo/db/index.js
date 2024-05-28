const mongoose = require('mongoose');
// const z = require('zod');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:barath43@cluster0.jz678vk.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
        courseId: Number,
        title: String,
        description: String,
        Price: Number,
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