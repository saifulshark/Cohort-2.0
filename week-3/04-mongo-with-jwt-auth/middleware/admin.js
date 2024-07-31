import { Admin } from "../solution/db";
const secret = require("../index")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const jwt = require('jsonwebtoken');
    const authheader = req.headers.authorization;
    const token = authheader.split(' ')[1];
    const verifyme = jwt.verify(token, secret);
    try {
        if (verifyme.username) {
            next();
        }
        else {
            res.status(403).json({
                msg: "Not authenticated"
            })
        }
    }
    catch (e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
}
module.exports = adminMiddleware;