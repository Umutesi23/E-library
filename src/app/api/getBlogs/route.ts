import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
// // import * as z from "zod"

export async function POST(req: Request) {
  try {
    const blogs = await db.blog.findMany();
    return NextResponse.json({ data: blogs });
  } catch (error) {
    return NextResponse.json({ message: "Failed" });
  }
}
