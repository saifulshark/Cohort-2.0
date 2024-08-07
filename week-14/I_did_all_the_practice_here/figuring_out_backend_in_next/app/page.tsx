import Image from "next/image";
import { NextRequest, NextResponse } from "next/server"
import client from "@/db"
import axios from 'axios';

async function getUserDetails() {
    const userData = await client.user.findFirst();
    console.log(userData);
    return({
        username:userData?.username,
        password:userData?.password
    })
}

// made this into async component. [This won't work in client side rendering components.]
export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userDetails?.username}
          </div>
          {userDetails?.password}
        </div>
      </div>
    </div>
  );
}
