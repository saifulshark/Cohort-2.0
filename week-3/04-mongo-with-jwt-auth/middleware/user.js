const jwt=require("jsonwebtoken")
const jwtSecret="cdsxcdxs"

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const authorization=req.headers.authorization
        let authArray=authorization.split(" ")
        let token=authArray[1]
        console.log(token)
        console.log(jwtSecret)
        let jwtresult=jwt.verify(token,jwtSecret)
        console.log("Verified user "+jwtresult.username)
        req.username=jwtresult.username
        console.log("request.username val in middleware"+req.username)
        next()
        

    }
    catch(err)
    {
        res.status(403).json({msg:"Not a verified user.", errormsg:err})
    }

}

module.exports = userMiddleware;