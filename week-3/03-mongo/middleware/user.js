const { User } = require("../db/index");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const username = req.header.username;
  const password = req.header.password;
  const UserExist = User.findOne({ username: username, password: password });
  if (UserExist) {
    next();
  } else {
    res.status(403).send({
      msg: "User don't Exist",
    });
  }
}

module.exports = userMiddleware;
