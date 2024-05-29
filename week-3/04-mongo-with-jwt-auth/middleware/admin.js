// Middleware for handling auth
const { Admin } = require('../db/index')
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    const existingUser = await Admin.findOne({ token });
    if(!existingUser){
        res.status(403).json({
            msg: "Invalid user"
        })
        return;
    }
    next();
}

module.exports = adminMiddleware;