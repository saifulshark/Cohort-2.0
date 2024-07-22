const z = require("zod");
const { User } = require("../db");

async function userMiddleware(req, res, next) {
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

  const user = await User.findOne({username,password});
  if(!user){
    return res.status(401).send({
      message: "User not found",
    });
  }
  

  next()
}

module.exports = userMiddleware;