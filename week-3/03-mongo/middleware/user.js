const { jwtPassword } = require("../../02-jwt");
const {User}=require("../db/index")
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username=req.headers.username;
    const password=req.headers.password;
    const userfound=await User.findOne({
        username:username,
        password:password
    })
    if(userfound){
        next()
    }else{
        res.status(403).send("user doest exist")
    }
}

module.exports = userMiddleware;