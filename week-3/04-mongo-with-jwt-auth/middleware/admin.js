const jwt = require( "jsonwebtoken" );
const { jwtsecret } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const headers = req.headers.authorization;
    const token = headers.split(" ")[1];
    const verify = jwt.verify(token,jwtsecret);
    if(verify.username){
        next();
    }else{
        res.status(403).josn({
            msg: "You are not authenticated"
        })
    }


}

module.exports = adminMiddleware;