import { findRelease } from "@/src/lib/releases";
import { downloadReleaseFile } from "@/src/lib/server/download-file";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type ReleaseFileRouteContext = {
  params: Promise<{
    file: string;
    version: string;
  }>;
};

export async function GET(_request: Request, context: ReleaseFileRouteContext) {
  const { file, version } = await context.params;
  const release = findRelease(version);

  if (!release || file !== release.fileName) {
    return new Response("Not found", { status: 404 });
  }

  return downloadReleaseFile(release);
}
