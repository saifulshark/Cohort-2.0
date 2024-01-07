const entities = require("../db/index")
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password
    const Admin = entities.Admin
    const existingAdmin = await Admin.findOne({username: username, password: password})
    if(!existingAdmin){
        res.status(403).json({
            msg:"Invalid credentials"
        })
        return
    }
    next()
}

module.exports = adminMiddleware;