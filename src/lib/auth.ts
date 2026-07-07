// Lightweight, dependency-free session auth for the admin panel.
// Uses the Web Crypto API (HMAC-SHA256) so the exact same code runs in both
// the Edge middleware and Node route handlers.

export const SESSION_COOKIE = "fswm_admin"
export const SESSION_MAX_AGE = 60 * 60 * 8 // 8 hours (seconds)

const encoder = new TextEncoder()

function getSecret(): string {
  return process.env.AUTH_SECRET || "dev-insecure-secret-change-me"
}

function toBase64url(input: ArrayBuffer | string): string {
  const bytes =
    typeof input === "string" ? encoder.encode(input) : new Uint8Array(input)
  let bin = ""
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i])
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function fromBase64urlBytes(b64url: string): Uint8Array {
  const b64 = b64url.replace(/-/g, "+").replace(/_/g, "/")
  const bin = atob(b64)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return bytes
}

async function getKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  )
}

// Create a signed session token for the given username.
export async function signSession(username: string): Promise<string> {
  const payload = { u: username, exp: Date.now() + SESSION_MAX_AGE * 1000 }
  const payloadB64 = toBase64url(JSON.stringify(payload))
  const key = await getKey()
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(payloadB64) as BufferSource
  )
  return `${payloadB64}.${toBase64url(sig)}`
}

// Verify a session token: valid signature and not expired.
export async function verifySession(
  token?: string | null
): Promise<boolean> {
  if (!token) return false
  const [payloadB64, sigB64] = token.split(".")
  if (!payloadB64 || !sigB64) return false

  try {
    const key = await getKey()
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      fromBase64urlBytes(sigB64) as BufferSource,
      encoder.encode(payloadB64) as BufferSource
    )
    if (!valid) return false

    const payload = JSON.parse(
      new TextDecoder().decode(fromBase64urlBytes(payloadB64))
    )
    if (typeof payload.exp !== "number" || payload.exp < Date.now()) return false
    return true
  } catch {
    return false
  }
}

// Constant-time-ish string compare for credentials.
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}
