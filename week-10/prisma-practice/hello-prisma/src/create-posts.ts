import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const post = await prisma.post.create({
    data:{
        title:"The journey to Civil Service",
        content:"Cracking the UPSC exam demands years of dedicated preparation, encompassing extensive study of diverse subjects and consistent practice with mock tests. The journey requires not only intellectual rigor but also emotional resilience to navigate the challenges and setbacks along the way. Becoming an IAS officer, the reward for this arduous journey, offers the opportunity to serve the nation with integrity, making a tangible difference in the lives of countless people.",
        published:true,
        authorId:2
    },
  });
  console.log(post);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })