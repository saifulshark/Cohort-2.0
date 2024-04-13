const jwt = require('jsonwebtoken')

function adminMiddleware(req, res, next) {
    const jwtReceived = req.headers.authorization.split("Bearer")[1].trim()
    try {
        const decoded = jwt.verify(jwtReceived, process.env.JWT_PASSWORD)
        if (decoded) {
            next()
        } else {
            res.status(403).json({
                msg: "Admin doesn't exist"
            })
        }
    } catch (e) {
        res.status(401).send(e)
    }
}

module.exports = adminMiddleware;