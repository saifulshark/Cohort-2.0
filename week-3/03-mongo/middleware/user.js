const { User } = require('../db/index')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.body.username
    const password = req.body.password
    let userfind=User.findOne({
        username,
        password
    })
        if(userfind) {
            console.log("User has been found")

            next()
        } else {
            // console.log(err)
            return res.status.json({
                msg: 'User does not exist'
            })
        }



}

module.exports = userMiddleware;