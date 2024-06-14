"use server"
import client from "@/db";
import { NextResponse } from "next/server";
export async function signup(username: string, password:string) {
    console.log("Hello!!!")
    try{
        const user = await client.user.create({
            data:{
                username: username,
                password: password
            }
        })
        return ({
            result: true,
            msg:"SignUp successfull.",
            userId: user.id,
        });
    }
    catch(Error){
        return ({
            result: false,
            ErrorHappend:Error
        })
    }
}