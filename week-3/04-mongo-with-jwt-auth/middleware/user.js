const { User } = require('../db/index')
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    
    const existingUser = await User.findOne({ token })
    if(!existingUser){
        res.status(403).json({
            message: "Invalid User"
        })
        return;
    }
    next();
}

module.exports = userMiddleware;