import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifySession, SESSION_COOKIE } from "@/lib/auth"

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = req.cookies.get(SESSION_COOKIE)?.value
  const authed = await verifySession(token)

  // Bare /admin -> send to the dashboard (which requires auth below).
  if (pathname === "/admin" || pathname === "/admin/") {
    const url = req.nextUrl.clone()
    url.pathname = "/admin/dashboard"
    return NextResponse.redirect(url)
  }

  // Already logged in? Skip the login page.
  if (pathname === "/admin/login" && authed) {
    const url = req.nextUrl.clone()
    url.pathname = "/admin/dashboard"
    url.search = ""
    return NextResponse.redirect(url)
  }

  // Protect every admin dashboard page.
  if (pathname.startsWith("/admin/dashboard")) {
    if (!authed) {
      const url = req.nextUrl.clone()
      url.pathname = "/admin/login"
      url.search = ""
      url.searchParams.set("from", pathname)
      return NextResponse.redirect(url)
    }
  }

  // Protect blog write operations. GET stays public so the site can read posts.
  if (pathname.startsWith("/api/blog")) {
    if (req.method !== "GET" && !authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/blog/:path*"],
}
