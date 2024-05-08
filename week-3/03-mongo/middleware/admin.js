const { Admin } = require('../db')

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;

    Admin.exists({ username, password })
        .then(() => next())
        .catch(() => res.status(403).json({ msg: "Not authorized" }));
}

module.exports = adminMiddleware;
