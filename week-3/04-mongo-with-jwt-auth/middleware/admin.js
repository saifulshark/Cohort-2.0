// Middleware for handling auth
const jwtPassword="gauravpadda"
const jwt=require("jsonwebtoken")
const {Admin}=require("../db")
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const jwttoken=req.headers.authorization
        const word=jwttoken.split(" ")
        const token=word[1]
        const verification=jwt.verify(token,jwtPassword)
        next();
    }catch{
        res.status(403).send("invalid admin")
    }
}

module.exports = adminMiddleware;