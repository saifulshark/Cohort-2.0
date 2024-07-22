const z = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { jwt_secret } = require("../config");

async function userMiddleware(req, res, next) {
  const payload = req.body;

  const payloadSchema = z.object({
    username: z.string().min(8),
    password: z.string().min(8),
  });

  const response = payloadSchema.safeParse(payload);


  if (!response.success) {
    return res.status(401).send({
      message: "Authentication failed",
      errors: response.error.issues,
    });
  }

  const user = await User.findOne({...payload});
  if(!user){
    return res.status(401).send({
      message: "User not found",
    });
  }
  

  next()
}
function isAuthorizedUser(req,res,next){
  try {
    const auth = req.headers['authorization'].split(" ")[1];
    const decoded = jwt.verify(auth,jwt_secret)
    next()
  } catch (error) {
    res.send({
      message: "Token expired"
    })
  }

}

module.exports = {userMiddleware,isAuthorizedUser};