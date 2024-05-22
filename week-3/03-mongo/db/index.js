const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://amandev200:Yourname%401@cluster0.fzhdktd.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourse : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : Course
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    price : String,
    imagelink : String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}