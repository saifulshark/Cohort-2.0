import { NextRequest } from "next/server"

export function GET(){
    return Response.json({
        email:"ahmedhashir96@gmail.com",
        name:"Hashirahmed K B"
    })
}

export async function POST(req: NextRequest){
    console.log("Hello!!!")
    const body: {username: string, password: string} = await req.json();
    console.log(body);
    return Response.json({
        msg:"SignUp successfull.",
        uname: body.username,
    })
}


// How the above is done on re1ct/express
// app.get('api/user', (req, res) => {
//     res.json({
//         email:"ahmedhashir96@gmail.com",
//         name:"Hashirahmed K B"
//     })
// })