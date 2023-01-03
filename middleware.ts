import { NextRequest, NextResponse } from "next/server";

const allowedParams = ["allowed"];

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - fbclid (Facebook Click Identifier)
     */
    '/(.*?)([?&]fbclid=[a-zA-Z0-9_-]+)',
  ],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  let changed = false;

  url.searchParams.forEach((_, key) => {
    if (!allowedParams.includes(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  });

  // Avoid infinite loop by only redirecting if the query
  // params were changed
  if (changed) {
    return NextResponse.redirect(url);
    // It's also useful to do a rewrite instead of a redirect
    // return NextResponse.rewrite(url)
  }
}
