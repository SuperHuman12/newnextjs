import { NextResponse } from 'next/server';

export async function GET() {
  const secretKey = process.env.SECRET_KEY;
  return NextResponse.json({ secretKey });
}
