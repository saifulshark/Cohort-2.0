import { NextRequest, NextResponse } from "next/server";

export function GET(
  req: NextRequest,
  { params }: { params: { authRoute: string[] } }
) {
  console.log("Params", params);
  return NextResponse.json({
    msg: "hello from: " + params.authRoute,
  });
}
