// Middleware for handling auth
const { Admin } = require("../db");
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  if (!username || !password) {
    return res
      .status(401)
      .send("Unauthorized: Username and password are required in headers");
  }
  const alreadyExist = await Admin.findOne({ username: username });
  if (alreadyExist) {
    next();
  } else {
    reses.status(403).json({
      msg: "Admin doesnt exist",
    });
  }
}

module.exports = adminMiddleware;
