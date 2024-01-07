const entities = require("../db/index")
async function userMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password
    const User = entities.User
    const existingUser = await User.findOne({username: username, password: password})
    if(!existingUser){
        res.status(403).json({
            msg:"Invalid credentials"
        })
        return
    }
    next()
}

module.exports = userMiddleware;