import { NextResponse, type NextRequest } from "next/server";

const releaseFilePattern = /^\/releases\/([^/]+)\/([^/]+\.dmg)$/;

export function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(releaseFilePattern);

  if (!match) {
    return NextResponse.next();
  }

  const [, version] = match;
  const downloadURL = request.nextUrl.clone();

  downloadURL.pathname = "/download";
  downloadURL.searchParams.set("version", version);

  if (!downloadURL.searchParams.has("source")) {
    downloadURL.searchParams.set("source", "release_file");
  }

  return NextResponse.rewrite(downloadURL);
}

export const config = {
  matcher: "/releases/:path*",
};
