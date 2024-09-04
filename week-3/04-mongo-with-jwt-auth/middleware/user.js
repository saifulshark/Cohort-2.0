const jwt = require("jsonwebtoken");
const secret = require("../config.env");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  try {
    const auth = req.headers.authorization;
    const authArr = auth.split(" ");
    const token = authArr[1];

    const decoded = jwt.verify(token, secret);

    if (decoded.username) {
      req.username = decoded.username;
      next();
    } else {
      res.status(403).json({
        msg: "you are not authenticated",
      });
    }
  } catch (e) {
    res.status(404).json({
      msg: "middleware error",
      error: e.stack,
    });
  }
}

module.exports = userMiddleware;

