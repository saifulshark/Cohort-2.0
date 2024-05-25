// Middleware for handling auth
const {Admin} = require('../db/index')
const jwtSecreat = require('../config')
const jwt = require('jsonwebtoken')
async function adminMiddleware(req, res, next){
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const bearer = req.headers.authorization
    const words = bearer.split(" ")
    const token = words[1]
    try{
    const decode = jwt.verify(token,jwtSecreat)

    const username = decode.username
    if(await Admin.findOne({
        username: username
    }))
    {
        next()
    }
    else {
        res.status(403).json({msg:"You are not authenticated"})
    }
    }
    catch(err){
        res.json({msg:"Incorrect inputs"})
    }
}
module.exports = adminMiddleware;