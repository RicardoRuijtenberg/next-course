import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 2.5 },
    { id: 2, name: "Bread", price: 3.5 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body) return NextResponse.json({ error: "Noop" }, { status: 404 });
  return NextResponse.json(
    { id: 10, name: body.name, price: body.price },
    {
      status: 201,
    }
  );
}
