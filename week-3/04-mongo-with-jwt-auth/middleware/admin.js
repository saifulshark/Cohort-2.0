const jwt = require("jsonwebtoken");
const secret = require("../config.env");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const auth = req.headers.authorization;
  const authArray = auth.split(" ");
  const token = authArray[1];

  try {
    const decoded = jwt.verify(token, secret);
    if (decoded.username) {
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (e) {
    res.status(404).json({
      msg: "Middleware Error",
    });
  }
}

module.exports = adminMiddleware;

