import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userQuestion: string | undefined = body?.query ?? body?.question;

    if (!userQuestion || typeof userQuestion !== "string") {
      return NextResponse.json(
        { error: "Missing 'query' in body" },
        { status: 400 }
      );
    }

    const res = await fetch(`${BACKEND_URL}/query`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: userQuestion }),
      // Avoid Next.js edge caching
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: "Backend error", details: text },
        { status: 502 }
      );
    }

    const data = await res.json();
    // Expected shape: { question: string, answer: string }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Unexpected error", details: String(error) },
      { status: 500 }
    );
  }
}


