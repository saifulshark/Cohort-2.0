import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export async function getTags(c:Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const res = await prisma.tags.findMany()

        return c.json({
            tags: res
        })
    }
    catch (error) {
        return c.json(`Internal server error ${error}`, 501)
    }
}

// get post by tag name
export async function getPostByTagName(c: Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const tag: string = String(c.req.param('id'))

        const res = await prisma.tags.findMany({
            where: {
                tag: tag
            },
            select: {
                post: {
                    select: {
                        author: { select: { username: true} },
                        id: true,
                        authorId: true,
                        title:true,
                        body: true,
                        createdAt: true
                    }
                }
            }
        })

        return c.json({
            posts: res[0].post.map((post) => ({
                authorname: post.author.username,
                id: post.id,
                authorId: post.authorId,
                title: post.title,
                body: post.body,
                createdAt: post.createdAt
            }))
        })
    }
    catch (error) {
        return c.json({message: `Internal server error ${error}`}, 501)
    }
}