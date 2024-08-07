
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.update({
        where: {
            id:4,
        },
        data:{
            name:"user0x1",
            email:"user0x1@email.com"
        }
    })
}

main()
  .then(async () => {
    console.log("done updating user.");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })