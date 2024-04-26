import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signupSchema, signinSchema } from "../zod/user";
import { Jwt } from "hono/utils/jwt";
import { Context } from "hono";

enum StatusCode {
    BADREQ = 400,
    NOTFOUND = 404,
    NOTPERMISSIOON = 403,
}

interface UserProps {
    id: number;
    username: string;
    email: string;
}

export async function signup(c: Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const body: {
            username: string;
            email: string;
            password: string;
        } = await c.req.json()

        const parseuser = signupSchema.safeParse(body)

        if(!parseuser.success) {
            return c.body('Invalid user', StatusCode.BADREQ)
        }
        
        const isUserExist = await prisma.user.findFirst({
            where: {
                email: body.email
            }
        })

        if(isUserExist) {
            return c.body('Email already exist', StatusCode.BADREQ)
        }

        const res = await prisma.user.create({
            data: {
                username: body.username,
                email: body.email,
                password: body.password
            }
        })

        const userId = res.id

        const token = await Jwt.sign(userId, c.env.JWT_TOKEN)

        return c.json({
            msg: "User created successfully",
            token: token,
            user: {
                userId: res.id,
                email: res.email,
                username: res.username
            }
        });
    }
    catch (err) {
        return c.body(`Internal server error ${err}`, 500)
    }
}

export async function signin(c: Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const body : {
            email: string,
            password: string
        } = await c.req.json()

        const parseuser = signinSchema.safeParse(body)

        if(!parseuser.success) {
            return c.body('Invalied input user', StatusCode.BADREQ)
        }

        const isUser = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.password
            }
        })

        if(isUser == null) {
            return c.body('User does not exist', StatusCode.BADREQ)
        }

        const userId = isUser.id

        const token = await Jwt.sign(userId, c.env.JWT_TOKEN)

        return c.json({
            message: "Login successfully",
            token: token,
            user: {
                id: userId,
                email: isUser.email,
                username: isUser.username
            }
        })
    }
    catch(err) {
        return c.body(`Internal server error ${err}`, 500)
    }
}

export async function getAllUsers(c:Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const res = await prisma.user.findMany()
        return c.json({
            users: res.map((user: UserProps) => ({
              id: user.id,
              username: user.username,
              email: user.email,
            })),
          });
    }
    catch (error) {
        return c.json(`Internal Server error ${error}`, 500)
    }
}