async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
  const password = req.headers.password;

  try{
  const userFound = await Admin.findOne({ username, password });
  if(adminFound)
   next();
  else
   res.status(403).json({message:"User not found"})
  }catch(err){
    res.status(404).json({ Error: "Error to get user" });
  }
}

module.exports = userMiddleware;