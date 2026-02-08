import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "placeholder",
    message: "Google OAuth handled by NextAuth/Firebase in production.",
  });
}
