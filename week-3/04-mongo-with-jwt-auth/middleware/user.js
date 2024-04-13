const jwt = require('jsonwebtoken')

function userMiddleware(req, res, next) {
    const jwtReceived = req.headers.authorization.split("Bearer")[1].trim()
    try {
        const decoded = jwt.verify(jwtReceived, process.env.JWT_PASSWORD)
        if (decoded) {
            req.headers.username = decoded.username
            next()
        } else {
            res.status(403).json({
                msg: "User doesn't exist"
            })
        }
    } catch (e) {
        res.status(401).send(e)
    }
}

module.exports = userMiddleware;