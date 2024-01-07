const zod = require("zod")

const schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})

function inputMiddleware(req, res, next){
    const parsed = schema.safeParse(req.body)
    if(!parsed["success"]){
        res.status(403).json({
            message: "Please enter valid email or password"
        })
        return
    }
    next()
}

module.exports = inputMiddleware
