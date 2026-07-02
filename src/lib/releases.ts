export type ScreenXRelease = {
  version: string;
  build: string;
  date: string;
  title: string;
  summary: string;
  minMacOS: string;
  fileName: string;
  fileSizeBytes: number;
  sha256: string;
  notarized: boolean;
  stapled: boolean;
  downloadPath: string;
  releaseNotesPath: string;
  highlights: string[];
};

export const releases: ScreenXRelease[] = [
  {
    version: "1.0.0",
    build: "2",
    date: "2026-07-03",
    title: "ScreenX 1.0.0",
    summary: "Initial public release with drag placement, quick layouts, per-screen grids, saved layouts, and a built-in guide.",
    minMacOS: "13.0",
    fileName: "ScreenX-1.0.0.dmg",
    fileSizeBytes: 3651189,
    sha256: "999538628bd6a178c9e9bac588563a07448dd79778683879f7051062eabf222f",
    notarized: true,
    stapled: true,
    downloadPath: "/releases/1.0.0/ScreenX-1.0.0.dmg",
    releaseNotesPath: "/releases#version-1-0-0",
    highlights: [
      "Hold Command while dragging a window to preview and place it.",
      "Use quick hotkeys for halves, thirds, quarters, center, and maximize.",
      "Tune each display with its own grid, rows, columns, and gap.",
      "Save reusable workspaces and restore windows later.",
    ],
  },
];

export const latestRelease = releases[0];

export function absoluteURL(origin: string, path: string) {
  return new URL(path, origin).toString();
}

export function formatBytes(bytes: number) {
  return new Intl.NumberFormat("en", {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }).format(bytes / 1_000_000);
}

export function releaseId(version: string) {
  return `version-${version.replaceAll(".", "-")}`;
}
