import { PrismaClient } from '@prisma/client'

//logging prisma connection here.
const prisma = new PrismaClient({log: ['info', 'query'],})

async function main() {
    //Fetching all posts
    const findAllPosts = await prisma.post.findMany();
    console.log("All posts:",findAllPosts);

    // /Fetching all published posts
    const findAllPublishedPosts = await prisma.post.findMany({
        where:{
            published:true,
        }
    });
    console.log("All published posts:",findAllPublishedPosts);
};

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })