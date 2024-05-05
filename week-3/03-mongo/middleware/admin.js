const { Admin } = require('../db/index')

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.body.username
    const password = req.body.password
    let adminfind=Admin.findOne({
        username,
        password
    }
)
    if(adminfind){
        console.log('Admin  exist')

            next()
    } else 
    {
        res.status(411).json({
        msg: 'Admin not exist'
       })
    }

}
module.exports = adminMiddleware;