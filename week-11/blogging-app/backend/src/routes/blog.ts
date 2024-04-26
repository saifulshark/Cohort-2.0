import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from 'hono/jwt'

const blogRoutes = new Hono()

type BlogInputResponse = { 
    title: string,
    body: string
}
type UserDataType = {
    id: string,
    name: string,
    email: string,
    password: string
}

//Auth Middleware
blogRoutes.use('*', async (c, next) => {
	console.log("test in middleware")
	const jwt = c.req.header('Authorization')?.split(" ")[1] as string
	const jwtSecret = c.env?.JWT_TOKEN_KEY as string
    try{
        const decodedPayload = await verify(jwt, jwtSecret)
        c.set("jwtPayload", decodedPayload)
        await next()
    }
	catch(e){
        c.status(401)
        return c.json({message: 'Unauthorized'})
    }
    c.status(400)
        return c.json({message: 'Internal Server Error'})
  })

blogRoutes.post('/', async (c)=>{
    //console.log("Test in blog route")

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL as string,
    } ).$extends(withAccelerate())
    
    const body: BlogInputResponse = await c.req.parseBody();
    const userData: UserDataType =  c.get('jwtPayload')

    console.log(body)
    console.log(userData)

    try{
        
        const dbResponse = await prisma.blogs.create({
            data:{
                title: body.title,
                content: body.body,
                authorId: userData.id
            }
        })
        console.log(dbResponse)
        return c.text("Blog Added")
    }
    catch(e){
        console.log(e)
        return c.text("Error in adding the blog")
    }
    
})

blogRoutes.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL as string,
    } ).$extends(withAccelerate())
    
    const id = c.req.param('id')

    try{
        
        const dbResponse = await prisma.blogs.findUnique({
            where:{
                id
            }
        })
        console.log(dbResponse)
        return c.json({
            title: dbResponse?.title,
            content: dbResponse?.content
        })
    }
    catch(e){
        console.log(e)
        return c.text("Error in adding the blog")
    }
    
})




blogRoutes.put('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL as string,
    } ).$extends(withAccelerate())
    
    const id = c.req.param('id')
    const body: BlogInputResponse = await c.req.parseBody();
    const userData: UserDataType =  c.get('jwtPayload')

    

    try{
        const dbResponse = await prisma.blogs.update({
            where: {
                id
            },
            data:{
                title: body.title,
                content: body.body,
                authorId: userData.id
            }
        })
        console.log(dbResponse)
        return c.text("Blog Updated")
    }
    catch(e){
        console.log(e)
        return c.text("Error in updating the blog")
    }
})


blogRoutes.delete('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL as string,
    } ).$extends(withAccelerate())
    
    const id = c.req.param('id')
    
    

    try{
        const dbResponse = await prisma.blogs.delete({
            where: {
                id
            }
        })
        console.log(dbResponse)
        return c.text("Blog Deleted")
    }
    catch(e){
        console.log(e)
        return c.text("Error in deleting the blog")
    }
})




export default blogRoutes

//BLOG ID: c15496f5-5b36-4de2-b9da-99993634d196