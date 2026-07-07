import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for RSC payload requests (Next.js internal navigation)
  if (pathname.startsWith("/_next/data") || request.headers.get("rsc") === "1") {
    return NextResponse.next();
  }

  // Set security headers
  const response = NextResponse.next();

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: [
    // Apply to all routes except static files, api, and Next.js internals
    "/((?!api|_next/static|_next/image|favicon-p19\\.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};