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
    version: "1.0.6",
    build: "86",
    date: "2026-07-19",
    title: "ScreenX 1.0.6",
    summary: "Makes ScreenX a permanent menu-bar utility with no Dock icon, while keeping automatic startup enabled by default.",
    minMacOS: "13.0",
    fileName: "ScreenX-1.0.6.dmg",
    fileSizeBytes: 3782057,
    sha256: "b24467310417259705504166cd6c60ffa5628f8a3c7a883693c2e03a801f156c",
    notarized: true,
    stapled: true,
    downloadPath: "/releases/1.0.6/ScreenX-1.0.6.dmg",
    releaseNotesPath: "/releases#version-1-0-6",
    highlights: [
      "ScreenX now runs exclusively as a menu-bar utility and no longer appears in the Dock.",
      "The Dock-mode preference has been removed, so the app keeps the same lightweight presentation for every user.",
      "The main window, Settings, and About remain available from the ScreenX menu-bar icon.",
      "Start at Login remains enabled by default, repairs its registration during startup, and can still be disabled in Settings.",
      "Includes a universal Developer ID signed, Apple-notarized, and stapled DMG.",
    ],
  },
  {
    version: "1.0.5",
    build: "85",
    date: "2026-07-12",
    title: "ScreenX 1.0.5",
    summary: "Keeps custom display layouts across restarts and reconnects, and starts the complete ScreenX engine automatically at login.",
    minMacOS: "13.0",
    fileName: "ScreenX-1.0.5.dmg",
    fileSizeBytes: 3786534,
    sha256: "b484bc8594f084a090924218e69e4d6a3b18f56dc52b7373e5c754663b659f6f",
    notarized: true,
    stapled: true,
    downloadPath: "/releases/1.0.5/ScreenX-1.0.5.dmg",
    releaseNotesPath: "/releases#version-1-0-5",
    highlights: [
      "Per-display grid, row, column, and gap settings are no longer deleted when a monitor is temporarily unavailable during startup.",
      "Stable physical-display identifiers keep custom layouts attached even when macOS assigns different runtime display IDs after a restart.",
      "ScreenX now initializes hotkeys, window monitoring, and placement services directly from the app lifecycle during login launches.",
      "Start at Login is enabled by default, persists as an explicit preference, and repairs its registration after the app is replaced or updated.",
      "Saved workspaces also follow the same physical monitor when display IDs change.",
      "Includes a universal Developer ID signed, Apple-notarized, and stapled DMG.",
    ],
  },
  {
    version: "1.0.4",
    build: "84",
    date: "2026-07-06",
    title: "ScreenX 1.0.4",
    summary: "Restores Shift as the default drag placement modifier, keeps direct canvas on Option + Shift, and ships the latest smooth placement refinements.",
    minMacOS: "13.0",
    fileName: "ScreenX-1.0.4.dmg",
    fileSizeBytes: 3154722,
    sha256: "5ca09434c0e2e0974c0ecba84cf2adb01751054bb81e3b6a004cf99e9b07ac2a",
    notarized: true,
    stapled: true,
    downloadPath: "/releases/1.0.4/ScreenX-1.0.4.dmg",
    releaseNotesPath: "/releases#version-1-0-4",
    highlights: [
      "Drag placement defaults to Shift again for predictable window dragging.",
      "Direct canvas placement remains Option + Shift by default.",
      "Placement drag uses direct smooth window animation while the preview updates immediately.",
      "The drag placement preview now uses a thicker rounded white border with no background tint.",
      "Settings includes controls for menu-bar-only mode and launching ScreenX at login.",
    ],
  },
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
