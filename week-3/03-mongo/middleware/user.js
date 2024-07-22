const z = require("zod");

function userMiddleware(req, res, next) {
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
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;