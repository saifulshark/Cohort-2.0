// Middleware for handling auth
const jwt=require("jsonwebtoken")
const jwtSecret="dbsjnxkams"
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const authorization=req.headers.authorization
        let authArray=authorization.split(" ")
        let token=authArray[1]
        console.log(token)
        console.log(jwtSecret)
        let jwtresult=jwt.verify(token,jwtSecret)
        console.log("Verified admin "+jwtresult.username)
        next()
        

    }
    catch(err)
    {
        res.status(403).json({msg:"Not a verified admin.", errormsg:err})
    }

}

module.exports = adminMiddleware;