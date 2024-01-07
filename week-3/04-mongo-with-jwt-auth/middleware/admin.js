const jwt = require("jsonwebtoken")
const secretServerKey = require("../keys").SERVER_SECRET_KEY
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    try{
        jwt.verify(token, secretServerKey)
        next()
    }
    catch(err){
        res.status(403).json({
            message:"Invalid credentials."
        })
    }
}

module.exports = adminMiddleware;