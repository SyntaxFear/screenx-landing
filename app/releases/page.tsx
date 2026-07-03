import type { Metadata } from "next";
import Image from "next/image";
import { Check, Download, Home } from "lucide-react";
import { SectionViewTracker } from "@/components/SectionViewTracker";
import { TrackedLink } from "@/components/TrackedLink";
import { analyticsEvents } from "@/src/lib/analytics";
import { downloadRoute, formatBytes, releaseId, releases } from "@/src/lib/releases";

export const metadata: Metadata = {
  title: "Releases",
  description: "Download the latest and older notarized ScreenX releases for macOS.",
};

const releasePageSections = [
  { id: "release-archive-hero", label: "Release archive hero" },
  { id: "release-archive-list", label: "Release archive list" },
];

export default function ReleasesPage() {
  return (
    <main className="archive-page">
      <SectionViewTracker page="releases" sections={releasePageSections} />
      <header className="archive-header">
        <TrackedLink
          className="brand-link"
          eventName={analyticsEvents.navigationClick}
          eventProperties={{ destination: "home", location: "archive_header_brand", page: "releases" }}
          href="/"
          aria-label="ScreenX home"
        >
          <Image src="/images/screenx-icon.png" alt="" width={36} height={36} />
          <span>ScreenX</span>
        </TrackedLink>
        <TrackedLink
          className="button button-secondary"
          eventName={analyticsEvents.navigationClick}
          eventProperties={{ destination: "home", location: "archive_header", page: "releases" }}
          href="/"
        >
          <Home size={18} aria-hidden="true" />
          Home
        </TrackedLink>
      </header>

      <section id="release-archive-hero" className="archive-hero">
        <p className="eyebrow">Release archive</p>
        <h1>Download ScreenX for macOS.</h1>
        <p>
          Every public build listed here is distributed as a Developer ID signed, notarized, and
          stapled DMG.
        </p>
      </section>

      <section id="release-archive-list" className="archive-list" aria-label="ScreenX releases">
        {releases.map((release) => (
          <article className="archive-card" id={releaseId(release.version)} key={release.version}>
            <div className="archive-card-main">
              <div>
                <span className="archive-version">Version {release.version}</span>
                <h2>{release.title}</h2>
                <p>{release.summary}</p>
              </div>
              <TrackedLink
                className="button button-primary"
                eventName={analyticsEvents.downloadClick}
                eventProperties={{
                  location: "release_archive_card",
                  page: "releases",
                  source: "release_archive",
                  version: release.version,
                }}
                href={downloadRoute(release.version, "release_archive")}
              >
                <Download size={18} aria-hidden="true" />
                Download
              </TrackedLink>
            </div>
            <dl className="archive-meta">
              <div>
                <dt>Date</dt>
                <dd>{release.date}</dd>
              </div>
              <div>
                <dt>macOS</dt>
                <dd>{release.minMacOS}+</dd>
              </div>
              <div>
                <dt>Size</dt>
                <dd>{formatBytes(release.fileSizeBytes)} MB</dd>
              </div>
              <div>
                <dt>Build</dt>
                <dd>{release.build}</dd>
              </div>
            </dl>
            <ul className="release-highlights">
              {release.highlights.map((highlight) => (
                <li key={highlight}>
                  <Check size={16} aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
            <code>{release.sha256}</code>
          </article>
        ))}
      </section>
    </main>
  );
}
