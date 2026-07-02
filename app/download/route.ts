import { NextResponse } from "next/server";
import { latestRelease } from "@/src/lib/releases";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  return NextResponse.redirect(new URL(latestRelease.downloadPath, request.url));
}
