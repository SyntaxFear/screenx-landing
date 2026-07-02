import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Download, Home } from "lucide-react";
import { formatBytes, releaseId, releases } from "@/src/lib/releases";

export const metadata: Metadata = {
  title: "Releases",
  description: "Download the latest and older notarized ScreenX releases for macOS.",
};

export default function ReleasesPage() {
  return (
    <main className="archive-page">
      <header className="archive-header">
        <Link className="brand-link" href="/" aria-label="ScreenX home">
          <Image src="/images/screenx-icon.png" alt="" width={36} height={36} />
          <span>ScreenX</span>
        </Link>
        <Link className="button button-secondary" href="/">
          <Home size={18} aria-hidden="true" />
          Home
        </Link>
      </header>

      <section className="archive-hero">
        <p className="eyebrow">Release archive</p>
        <h1>Download ScreenX for macOS.</h1>
        <p>
          Every public build listed here is distributed as a Developer ID signed, notarized, and
          stapled DMG.
        </p>
      </section>

      <section className="archive-list" aria-label="ScreenX releases">
        {releases.map((release) => (
          <article className="archive-card" id={releaseId(release.version)} key={release.version}>
            <div className="archive-card-main">
              <div>
                <span className="archive-version">Version {release.version}</span>
                <h2>{release.title}</h2>
                <p>{release.summary}</p>
              </div>
              <Link className="button button-primary" href={release.downloadPath}>
                <Download size={18} aria-hidden="true" />
                Download
              </Link>
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
