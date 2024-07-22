const z = require("zod");
const jwt = require("jsonwebtoken");
const { Admin } = require("../db");
const { jwt_secret } = require("../config");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
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
  const user = await Admin.findOne({ ...payload });
  if (!user) {
    return res.status(401).send({
      message: "Admin not found",
    });
  }

  next();
}

async function userExists(req, res, next) {
  const userPayload = req.body;
  const user = await Admin.find({
    username: userPayload.username,
    password: userPayload.password,
  });
  console.log("user", user.length);
  if (user.length) {
    return res.send({
      message: "User already exists",
    });
  }
  next();
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

module.exports = { adminMiddleware, userExists ,isAuthorizedUser};
