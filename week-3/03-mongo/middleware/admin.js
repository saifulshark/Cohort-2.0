const z = require("zod");
const { Admin } = require("../db");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
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
  

  next()

}

async function userExists(req, res, next) {
  const userPayload = req.body;
  const user = await Admin.find({ username: userPayload.username })
  console.log("user",user.length)
  if (user.length) {
    return res.send({
      message: "User already exists"
    })
  }
  next()
}


module.exports = { adminMiddleware, userExists };
