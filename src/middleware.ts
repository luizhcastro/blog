import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.method === "POST") {
    const contentType = request.headers.get("content-type") ?? "";
    const nextAction = request.headers.get("next-action");

    if (nextAction || contentType.includes("multipart/form-data")) {
      return new NextResponse("Not Found", { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
