const jwt = require("jsonwebtoken");

function validateJWT(req, res, next){
    try {
      const token = req.headers.authorization; 
      const username = req.headers.username;
      const decoded = jwt.decode(token);
      const usernameToken = decoded.username;

      if(username === usernameToken){
        next();
      }
    } catch (error) {
      return res.json({
        msg:"Invalid token"
      });
    }
  }

  module.exports = validateJWT;