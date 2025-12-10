import dbConnect from "@/lib/dbConnect";
import Post from "@/models/BlogPost";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();

    const post = await Post.create(body);

    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error) {
    console.error(error);

    const errorMessage =
      error instanceof Error ? error.message : "Erro ao criar o post.";

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 400 } // Bad Request
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "API de Posts funcionando. Use POST para criar posts." },
    { status: 200 }
  );
}
