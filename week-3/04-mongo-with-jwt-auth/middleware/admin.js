const jwt = require("jsonwebtoken");
const { Admin } = require("../../04-mongo-with-jwt-auth/db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    const jwtToken = token.split(' ')[1];
    try {
    const decodedValue = jwt.verify(jwtToken, 'secret');
        if(decodedValue.username){
            const response = await Admin.findOne({
                username: decodedValue.username
            })
            if(response)
            next()
        }
        else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch (error) {
        res.json({
            msg: "Something went wrong"
        })
    }
    
}

module.exports = adminMiddleware;