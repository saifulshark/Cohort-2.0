import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

const userRoutes = new Hono()

type SignUpResponse = {
    username: string,
    email: string,
    password: string
}

type SigninResponse = {
    email: string,
    password: string
}
userRoutes.post('/signup', async (c)=>{
    

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL as string,
    }).$extends(withAccelerate())
    const body: SignUpResponse = await c.req.parseBody();
    try{
        const checkUser = await prisma.user.findUnique({
            where:{
                email: body.email
            }
        })
        if(checkUser){
            c.status(409)
            return c.text("User Already Exists")
        }
        const dbResponse = await prisma.user.create({
            data:{
                name: body.username,
                email: body.email,
                password: body.password,
            }
        })
        console.log(dbResponse)
        return c.text("User Added")
    }
    catch(e){
        console.log(e)
        return c.text("Error in adding user")
    }
    
})

userRoutes.post('/signin', async (c)=>{
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL as string,
    } ).$extends(withAccelerate())
    const body: SigninResponse = await c.req.parseBody();
    //console.log(body)
    try{
        const checkUser = await prisma.user.findUnique({
            where:{
                email: body.email
            }
        })
        if(checkUser){
            const jwtSecret = c.env?.JWT_TOKEN_KEY as string
            
            const token = await sign(checkUser, jwtSecret)
            console.log(token)
            c.status(201)
            return c.json({secret: token})
        }
        c.status(404)
        return c.text("User do not exist")
    }
    catch(e){
        console.log(e)
        return c.text("Error in adding user")
    }
})


export default userRoutes