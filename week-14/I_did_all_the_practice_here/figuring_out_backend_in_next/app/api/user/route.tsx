import client from "@/db"
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { signup } from "@/app/actions/user";
import { json } from "stream/consumers";

export async function POST(req: NextRequest){
    const body: {username: string, password: string} = await req.json();
    const response = await signup(body.username, body.password);  
    return NextResponse.json(response);
}


// How the above is done on re1ct/express
// app.get('api/user', (req, res) => {
//     res.json({
//         email:"ahmedhashir96@gmail.com",
//         name:"Hashirahmed K B"
//     })
// })