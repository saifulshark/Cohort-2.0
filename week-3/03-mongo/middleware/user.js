const {User}= require("../db"); 
function userMiddleware(req, res, next) {
    // Implement user auth logic
    try {
        const username = req.headers.username;
        const password = req.headers.password;

        const ans = User.findOne({
            username: username,
            password: password,
        });
        if (ans) next();
        else {
            res.status(404).json({
                msg: "admin doesnt exist",
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server error",
            error: error.message,
        });
    }
    
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;