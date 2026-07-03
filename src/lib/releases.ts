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
    version: "1.0.3",
    build: "35",
    date: "2026-07-03",
    title: "ScreenX 1.0.3",
    summary: "Simplifies quick layout access to Control + Command, preserves Settings customization, and includes the latest placement fixes for ScreenX's own window.",
    minMacOS: "13.0",
    fileName: "ScreenX-1.0.3.dmg",
    fileSizeBytes: 3708495,
    sha256: "4365f03e81cadc680a09f88fce5c091736fced5aef976042f68d257171e457a3",
    notarized: true,
    stapled: true,
    downloadPath: "/releases/1.0.3/ScreenX-1.0.3.dmg",
    releaseNotesPath: "/releases#version-1-0-3",
    highlights: [
      "Quick Layout defaults now use Control + Command instead of Control + Option + Command.",
      "Settings still lets users choose their own quick layout modifier keys.",
      "Direct canvas placement now targets ScreenX's own app window correctly.",
      "Includes the latest signed, notarized, and stapled public DMG.",
    ],
  },
  {
    version: "1.0.2",
    build: "5",
    date: "2026-07-03",
    title: "ScreenX 1.0.2",
    summary: "Marks ScreenX as an open-source macOS app and points the app, website, and release metadata to the public project repository.",
    minMacOS: "13.0",
    fileName: "ScreenX-1.0.2.dmg",
    fileSizeBytes: 3652210,
    sha256: "491122d2e1be63958898d2f2e40a4bde342852e36e3edd51b4b5e380238efb31",
    notarized: true,
    stapled: true,
    downloadPath: "/releases/1.0.2/ScreenX-1.0.2.dmg",
    releaseNotesPath: "/releases#version-1-0-2",
    highlights: [
      "About now links directly to the public ScreenX project repository.",
      "The landing page GitHub link now opens the ScreenX source code.",
      "Adds the MIT open-source license to the app repository.",
      "Includes the latest signed, notarized, and stapled public DMG.",
    ],
  },
  {
    version: "1.0.1",
    build: "4",
    date: "2026-07-03",
    title: "ScreenX 1.0.1",
    summary: "Refines the default canvas to a simple 2 x 1 layout and keeps previous custom display profiles intact.",
    minMacOS: "13.0",
    fileName: "ScreenX-1.0.1.dmg",
    fileSizeBytes: 3652169,
    sha256: "1fe68b7a856cbc210e24915e6b09fe9b017380f68b1906d53e837c4419e8a6b8",
    notarized: true,
    stapled: true,
    downloadPath: "/releases/1.0.1/ScreenX-1.0.1.dmg",
    releaseNotesPath: "/releases#version-1-0-1",
    highlights: [
      "New default display profile is 2 x 1 for clean side-by-side work.",
      "Older untouched 3 x 1 and 3 x 2 default profiles migrate to the new default once.",
      "Custom grids such as 2 x 2, 1 x 2, and per-display setups remain preserved.",
      "Includes the latest signed, notarized, and stapled public DMG.",
    ],
  },
  {
    version: "1.0.0",
    build: "3",
    date: "2026-07-03",
    title: "ScreenX 1.0.0",
    summary: "Initial public release with drag placement, quick layouts, per-screen grids, saved layouts, and a built-in guide.",
    minMacOS: "13.0",
    fileName: "ScreenX-1.0.0.dmg",
    fileSizeBytes: 3651250,
    sha256: "61444549399e35409422fe07838637d2af3e38a830de15f5c3dfc5ebf6e2a8e3",
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

export function findRelease(version: string | null | undefined) {
  return releases.find((release) => release.version === version);
}

export function absoluteURL(origin: string, path: string) {
  return new URL(path, origin).toString();
}

export function downloadRoute(version: string, source: string) {
  const params = new URLSearchParams({ version, source });

  return `/download?${params.toString()}`;
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
