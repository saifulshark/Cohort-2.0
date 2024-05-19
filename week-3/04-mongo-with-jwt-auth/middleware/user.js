const {JWT_SECRET} = require('../config');
const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwt_token = words[1];

    const decoded = jwt.verify(jwt_token,JWT_SECRET);
    if(decoded.username){
        next();
    }else{
        res.status(403).json({
            message: "You are not authorized to access this resource"
        })
    }
}

module.exports = userMiddleware;