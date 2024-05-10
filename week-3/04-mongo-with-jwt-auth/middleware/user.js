const jwt = require('jsonwebtoken');
const { User } = require('../../04-mongo-with-jwt-auth/db');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const jwtToken = token.split(' ')[1];
    try {
        const decodedValue = jwt.verify(jwtToken, 'secret')
        if(decodedValue.username){
            const response = await User.findOne({
                username: decodedValue.username
            })
            if(response){
                next()
            }
        }
        else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch (error) {
        res.json({
            msg: "Something went wrong"
        })
    }
}

module.exports = userMiddleware;