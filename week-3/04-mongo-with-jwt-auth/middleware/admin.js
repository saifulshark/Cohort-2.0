// Middleware for handling auth
 const jwt=require('jsonwebtoken')
 const JWT_SECRET="1234"
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization
    const parts=token.split(" ")
    const rtoken=parts[1];
    try{
         jwt.verify(rtoken,JWT_SECRET)
          next()
    }catch(e)
    {
        res.status(401).json({
            msg:"invalid token"
        })
    }
}

module.exports = adminMiddleware;