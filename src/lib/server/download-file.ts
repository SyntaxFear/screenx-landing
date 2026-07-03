import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { type ScreenXRelease } from "@/src/lib/releases";

function publicFilePath(publicPath: string) {
  return join(process.cwd(), "public", ...publicPath.split("/").filter(Boolean));
}

export async function downloadReleaseFile(release: ScreenXRelease) {
  const file = await readFile(publicFilePath(release.downloadPath));

  return new Response(file, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Disposition": `attachment; filename="${release.fileName}"`,
      "Content-Length": String(file.byteLength),
      "Content-Type": "application/x-apple-diskimage",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
