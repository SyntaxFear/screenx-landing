import { absoluteURL, downloadRoute, releases } from "@/src/lib/releases";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export function GET(request: Request) {
  const origin = new URL(request.url).origin;

  return Response.json({
    latest: releases[0].version,
    releases: releases.map((release) => ({
      ...release,
      downloadURL: absoluteURL(origin, downloadRoute(release.version, "api_releases")),
      releaseNotesURL: absoluteURL(origin, release.releaseNotesPath),
    })),
  });
}
