import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";


enum StatusCode {
    BADREQ = 400,
    NOTFOUND = 404,
    NOTPERMISSIOON = 403,
}

export async function getAllPost(c:Context) {
    const prisma = await new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const result = await prisma.posts.findMany({
            include: {
                tags: true,
                author: true
            }
        })

        return c.json({
            post: result.map((res) => ({
                id: res.id,
                title: res.title,
                body: res.body,
                tags: res.tags,
                username: res.author.username,
                authorId: res.author.id,
                createdAt: res.createdAt
            }))
        })
    }
    catch (error) {
        return c.body("Internal server error", 501)
    }
}

export async function getUserPosts(c:Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const response = await prisma.posts.findMany({
            where: {
                authorId: c.get("authorId")
            }
        })

        return c.json({
            post: response
        })
    }
    catch (error) {
        return c.body(`Internal server error ${error}`, 501)
    }
}

export async function createPost(c:Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const body: {
            title: string,
            body: string,
            tags: string
        } = await c.req.json()

        const tagNames = body.tags.split(",").map((tag) => tag.trim())

        if(body.title == null || body.body == null){
            return c.body("Invalid user credentials", StatusCode.BADREQ)
        }

        const res = await prisma.posts.create({
            data: {
                title: body.title,
                body: body.body,
                authorId: c.get("authorId"),
                tags: {
                    connectOrCreate: tagNames.map((tag) => ({
                        where: {tag},
                        create: {tag}
                    }))
                }
            },
            include: {
                tags: true
            }
        })

        return c.json({
            message: "Post created successfully",
            post: {
                id: res.id,
                title: res.title,
                body: res.body,
                tag: res.tags.map((tag) => tag.tag),
                createdAt: res.createdAt
            }
        })

    }
    catch (error) {
        return c.body("Internal server error", 501)
    }
}

// getPost by Id

export async function getPost(c:Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const id: number = Number(c.req.param('id'));

        const isPostExist = await prisma.posts.findFirst({
            where: {
                id: id,
                authorId: c.get('authorId')
            },
            include: {
                tags: true
            }
        })

        if(isPostExist == null) {
            return c.body('Post does not exist', StatusCode.NOTFOUND)
        }

        return c.json({
            post: {
                id: isPostExist.id,
                title: isPostExist.title,
                body: isPostExist.body,
                tags: isPostExist.tags,
                createdAt: isPostExist.createdAt
            }
        })
    }
    catch (error) {
        return c.body(`Internal server error ${error}`, 501)
    }
}

// update post by given id
export async function updatePost(c:Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const id: number = Number(c.req.param('id'))

        const body : {
            title: string,
            body: string,
            tags: string
        } = await c.req.json()

        const tagNames = body.tags.split(',').map((tag) => tag.trim())

        const isPostExist = await prisma.posts.findFirst({
            where: {
                id: id,
                authorId: c.get('authorId')
            }
        })

        if(isPostExist == null){
            return c.body('Post not found', StatusCode.NOTFOUND)
        }

        const updatePost = await prisma.posts.update({
            where: {
                id: id,
                authorId: c.get('authorId')
            },
            data:{
                title: body.title,
                body: body.body,
                tags: {
                    connectOrCreate: tagNames.map((tag) => ({
                        where: {tag},
                        create: {tag}
                    }))
                }
            },
            include: {
                tags: true
            }
        })

        return c.json({
            data: {
                id: updatePost.id,
                title: updatePost.title,
                body: updatePost.body,
                tags: updatePost.tags,
                createdAt: updatePost.createdAt
            }
        })
    }
    catch (error) {
        return c.json('Internal server error', 501)
    }
}

// delete post by specific id
export async function deletePost(c:Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const id: number = Number(c.req.param('id'))

        const isPostExist = await prisma.posts.findFirst({
            where: {
                id: id,
                authorId: c.get('authorId')
            },
        })

        if(isPostExist == null) {
            return c.body('Post does not exist', StatusCode.NOTFOUND)
        }

        const res = await prisma.posts.delete({
            where: {
                id: id,
                authorId: c.get('authorId')
            }
        })
        return c.json({
            message: 'Post deleted'
        })
    }
    catch (error) {
        return c.json(`Internal server error ${error}`, 501)
    }
}