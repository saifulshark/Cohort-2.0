const mongoose = require('mongoose');

// Generate a random GUID (UUID v4)
// Connect to MongoDB
mongoose.connect('mongodb+srv://us:pswd@cluster0.ydstk0l.mongodb.net/useradmin');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    //{ username: 'admin', password: 'pass' }
    username:String,
    password:String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    imageLink:String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}