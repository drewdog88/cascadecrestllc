import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { applySecurityHeaders } from "@/lib/security-headers";

export function proxy(_request: NextRequest) {
  return applySecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)",
  ],
};
