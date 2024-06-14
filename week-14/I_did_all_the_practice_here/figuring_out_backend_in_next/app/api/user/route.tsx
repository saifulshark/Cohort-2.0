import { PrismaClient } from "@prisma/client";
const client = new PrismaClient;

export async function POST(req: NextRequest){
    console.log("Hello!!!")
    const body: {username: string, password: string} = await req.json();
    try{
        const user = await client.user.create({
            data:{
                username: body.username,
                password: body.password
            }
        })
        return NextResponse.json({
            msg:"SignUp successfull.",
            userId: user.id,
        });
    }
    catch(Error){
        return NextResponse.json({
            ErrorHappend:Error
        })
    }
    
}


// How the above is done on re1ct/express
// app.get('api/user', (req, res) => {
//     res.json({
//         email:"ahmedhashir96@gmail.com",
//         name:"Hashirahmed K B"
//     })
// })