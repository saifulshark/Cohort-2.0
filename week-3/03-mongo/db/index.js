const mongoose = require('mongoose');
const { type } = require('os');
const { title } = require('process');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String(),
    email:String(),
    password:String()
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String(),
    email:String(),
    password:String(),
    purchasedCourses: [{
        type:mongoose.Schema.Types.ObjectId,
        reference : `Course`,
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
     title:String(),
     description : String(),
     imageLink: String,
     price :Number,

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}