// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username=req.headers.username
    const password=req.headers.password
    const adminexists= await Admin.findOne({username,password})
    if(adminexists)
    {
         next();
    }
    else
    {
        res.status(404).send("DO not exists");
    }
}

module.exports = adminMiddleware;