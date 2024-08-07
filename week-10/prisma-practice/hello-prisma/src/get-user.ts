import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    //Fetching all users.
    const users = await prisma.user.findMany();
    console.log("All Users:", users);

    //Fetching users with a specific id.
    const userWithID3 = await prisma.user.findUnique({
        where:{
            id:3,
        }
    });
    console.log("The user with id 3 is:", userWithID3);

    //Fetching users who has posts.
    const postedUsers = await prisma.user.findMany({
        include:{
            posts:true,
        }
    });
    console.log("The Users who has posts: ", postedUsers);

    //Fetching posted users from a given set of ids.
    const postedUsersFiltered = await prisma.user.findMany({
        include:{
            posts:true
        },
        where:{
            id:{
                in:[1,3]
            },
            posts:{
                some:{},
            }
        },
    });
    console.log("The Users who has posts: ", JSON.stringify(postedUsersFiltered));
}

main().then(
    async () => {
        console.log("Completed successfully.");
        await prisma.$disconnect();
    }
).catch(async (error) => {
    console.log("Error Happened:", error);
    await prisma.$disconnect();
    process.exit(1);
})