// Middleware for handling auth
const {Admin}= require("../db"); 
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const username = req.headers.username;
        const password = req.headers.password;

        const ans = Admin.findOne({
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
}

module.exports = adminMiddleware;
