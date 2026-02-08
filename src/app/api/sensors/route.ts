import { NextResponse } from "next/server";
import { sensorSeries } from "@/lib/data/mock";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    devices: 4,
    data: sensorSeries,
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    status: "received",
    receivedAt: new Date().toISOString(),
    payload: body,
  });
}
