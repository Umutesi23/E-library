import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
// // import * as z from "zod"

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, blogPost } = body;

    const newBlog = await db.blog.create({
      data: { blogPost, name: name },
    });
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ message: "Failed" });
  }
}
