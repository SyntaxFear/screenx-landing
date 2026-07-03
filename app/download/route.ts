import { NextResponse } from "next/server";
import { track } from "@vercel/analytics/server";
import { analyticsEvents, safeAnalyticsValue } from "@/src/lib/analytics";
import { findRelease, latestRelease } from "@/src/lib/releases";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const requestURL = new URL(request.url);
  const requestedVersion = requestURL.searchParams.get("version");
  const release = findRelease(requestedVersion) ?? latestRelease;
  const source = safeAnalyticsValue(requestURL.searchParams.get("source"), "direct");

  try {
    await track(
      analyticsEvents.downloadStarted,
      {
        file_name: release.fileName,
        is_latest: release.version === latestRelease.version,
        requested_version: safeAnalyticsValue(requestedVersion, release.version),
        source,
        version: release.version,
      },
      {
        request: {
          headers: request.headers,
        },
      },
    );
  } catch {
    // Downloads should keep working even if analytics is blocked or unavailable.
  }

  return NextResponse.redirect(new URL(release.downloadPath, request.url));
}
