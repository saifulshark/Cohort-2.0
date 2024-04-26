import { Context, Next } from "hono";
import { Jwt } from "hono/utils/jwt";
import { env } from "hono/adapter";

export async function authMiddlware(c:any, next: Next) {
    try{
        const token: string = c.req.header("Authorization").split(" ")[1]

        if(token != null || token != undefined){
            const decode = await Jwt.verify(token, c.env.JWT_TOKEN)
            if(decode){
                c.set("authorId", token)
                await next()
            } else {
                return c.body("Unauthorized User", 401)
            }
        } else {
            return c.body("Unauthorized User", 401)
        }
    }
    catch (error) {
        return c.body("Unauthorized", 401)
    }
}