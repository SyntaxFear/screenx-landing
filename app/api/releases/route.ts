import { absoluteURL, releases } from "@/src/lib/releases";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export function GET(request: Request) {
  const origin = new URL(request.url).origin;

  return Response.json({
    latest: releases[0].version,
    releases: releases.map((release) => ({
      ...release,
      downloadURL: absoluteURL(origin, release.downloadPath),
      releaseNotesURL: absoluteURL(origin, release.releaseNotesPath),
    })),
  });
}
