const jwt = require('jsonwebtoken');
const { Admin, Course } = require('../db/index');
const JWTPASSWORD = require('../config');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const authString = req.headers.authorization;
    const token = authString.split(' ')[1];
    console.log(token);
    jwt.verify(token, JWTPASSWORD, async (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: "Error verifying token" });
        }
        if (!(await Admin.find({ username: decoded.username }))) {
            return res.status(403).json({ message: "not authorized" });
        }
    });
    next();
}

module.exports = adminMiddleware;
