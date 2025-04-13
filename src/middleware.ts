import { NextRequest, NextResponse } from "next/server";

// Middleware to check if the user is authenticated
export function middleware(request: NextRequest) {
  // Check if the request has a valid session
  const session = request.cookies.get("session");

  console.log("req", request.url, session);

  // If the session is not valid, redirect to the login page
  //   if (!session) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  // If the session is valid, continue to the requested page
  return NextResponse.next();
}
