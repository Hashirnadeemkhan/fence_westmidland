import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { isAdmin } from "@/lib/require-admin"

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const blog = await prisma.blog.findUnique({ where: { slug: params.slug } })
  return NextResponse.json(blog)
}

export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { title, content, imageUrl } = await req.json()
  const blog = await prisma.blog.update({
    where: { slug: params.slug },
    data: { title, content, imageUrl },
  })
  return NextResponse.json(blog)
}

export async function DELETE(_req: Request, { params }: { params: { slug: string } }) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  await prisma.blog.delete({ where: { slug: params.slug } })
  return NextResponse.json({ message: "Deleted successfully" })
}
