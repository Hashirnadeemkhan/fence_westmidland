import { NextResponse } from "next/server"
import { signSession, safeEqual, SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/auth"

export async function POST(req: Request) {
  let password = ""
  try {
    const body = await req.json()
    password = typeof body?.password === "string" ? body.password : ""
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const expected = process.env.ADMIN_PASSWORD
  if (!expected) {
    return NextResponse.json(
      { error: "Admin password is not configured on the server." },
      { status: 500 }
    )
  }

  if (!password || !safeEqual(password, expected)) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 })
  }

  const token = await signSession("admin")
  const res = NextResponse.json({ ok: true })
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  })
  return res
}
