import { absoluteURL, downloadRoute, latestRelease } from "@/src/lib/releases";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export function GET(request: Request) {
  const origin = new URL(request.url).origin;

  return Response.json({
    version: latestRelease.version,
    downloadURL: absoluteURL(origin, downloadRoute(latestRelease.version, "app_update")),
    releaseNotesURL: absoluteURL(origin, latestRelease.releaseNotesPath),
  });
}
