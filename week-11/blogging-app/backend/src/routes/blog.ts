import { Hono } from "hono";
import { verify } from 'hono/jwt'

const blogRoutes = new Hono()



blogRoutes.use('*', async (c, next) => {
	console.log("test in middleware")
	const jwt = c.req.header('Authorization')?.split(" ")[1] as string
	const jwtSecret = c.env?.JWT_TOKEN_KEY as string
    try{
        const decodedPayload = await verify(jwt, jwtSecret)
        c.set(decodedPayload, decodedPayload)
        await next()
    }
	catch(e){
        c.status(401)
        return c.json({message: 'Unauthorized'})
    }
	
	
	
  })




blogRoutes.get('/helloworld', (c)=>{
    return c.text("This is from blog Routes")
})

export default blogRoutes