import { cookies } from "next/headers"
import { verifySession, SESSION_COOKIE } from "@/lib/auth"

// Returns true when the current request carries a valid admin session.
// Used inside route handlers as a second line of defense behind the middleware.
export async function isAdmin(): Promise<boolean> {
  const token = cookies().get(SESSION_COOKIE)?.value
  return verifySession(token)
}
