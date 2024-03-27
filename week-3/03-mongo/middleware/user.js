const { User } = require("../db");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  if (!username || !password) {
    return res
      .status(401)
      .send("Unauthorized: Username and password are required in headers");
  }

  const alreadyExist = await User.findOne({ username: username });
  if (alreadyExist) {
    next();
  } else {
    res.status(403).json({
      msg: "User doesnt exist",
    });
  }
}

module.exports = userMiddleware;
