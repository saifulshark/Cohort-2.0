import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main() {
    await prisma.user.create({
        data:{
            email: "user01@email.com",
            name: "user01",
            posts:{
                create:{
                    title:"This is a sample post title",
                    content:"This is a sample content",
                    published: false,
                }
            }
        }
    })
}

main().then(
    async () => {
        console.log("User and Post added.");
        await prisma.$disconnect();
    }
).catch(async (error) => {
    console.log("Error Happened:", error);
    await prisma.$disconnect();
    process.exit(1);
})