// import { NextRequest, NextResponse } from "next/server";

// export function GET(
//   req: NextRequest,
//   { params }: { params: { nextauth: string[] } }
// ) {
//   console.log("Params", params);
//   return NextResponse.json({
//     msg: "hello from: " + params.nextauth,
//   });
// }

import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(NEXT_AUTH);

export { handler as GET, handler as POST };
