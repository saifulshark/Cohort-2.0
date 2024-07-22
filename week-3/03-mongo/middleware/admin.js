const z = require("zod");
const { Admin } = require("../db");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  const username = req.headers["username"];
  const password = req.headers["password"];

  const headers = {
    username,
    password,
  };
  const headersSchema = z.object({
    username: z.string().min(8),
    password: z.string().min(8),
  });

  const response = headersSchema.safeParse(headers);


  if (!response.success) {
    return res.status(401).send({
      message: "Authentication failed",
      errors: response.error.issues,
    });
  }
  const user = await Admin.findOne({username,password});
  if(!user){
    return res.status(401).send({
      message: "Admin not found",
    });
  }

  next()

}

async function userExists(req, res, next) {
  const userPayload = req.body;
  const user = await Admin.find({ username: userPayload.username ,password:userPayload.password})
  console.log("user",user.length)
  if (user.length) {
    return res.send({
      message: "User already exists"
    })
  }
  next()
}


module.exports = { adminMiddleware, userExists };
