const jwtPassword="gauravpadda"
const jwt=require("jsonwebtoken")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
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


module.exports = userMiddleware;