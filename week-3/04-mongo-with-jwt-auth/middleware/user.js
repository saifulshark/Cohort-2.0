const jwt = require( "jsonwebtoken" );
const { jwtsecret } = require("../config");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const headers = req.headers.authorization ;
    const token = headers.split(" ")[1];
    const verify = jwt.verify(token,jwtsecret);
    if(verify.username){
        req.username = verify.username; // this passes the value to next middleware where it can be accessed
        next();
    }else{
        res.status(403).json({
            msg: "you are not authorised"
        })
    }
}

module.exports = userMiddleware;