const mongoose = require('mongoose');
const { string } = require('zod');

// Connect to MongoDB
mongoose.connect('url')
// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    desciption : String,
    imageLink : String,
    price : Number

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
