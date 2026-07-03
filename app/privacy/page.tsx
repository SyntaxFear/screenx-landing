import type { Metadata } from "next";
import Image from "next/image";
import { Home } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";
import { analyticsEvents } from "@/src/lib/analytics";
import { seoImage, sitePath } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "ScreenX keeps window arrangement local to your Mac. The website uses privacy-friendly Vercel analytics for traffic and download metrics.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "ScreenX Privacy",
    description: "ScreenX arranges windows locally and does not require Screen Recording permission.",
    url: sitePath("/privacy"),
    images: [seoImage],
  },
};

export default function PrivacyPage() {
  return (
    <main className="archive-page legal-page">
      <header className="archive-header">
        <TrackedLink
          className="brand-link"
          eventName={analyticsEvents.navigationClick}
          eventProperties={{ destination: "home", location: "privacy_header_brand", page: "privacy" }}
          href="/"
          aria-label="ScreenX home"
        >
          <Image src="/images/screenx-icon.png" alt="" width={36} height={36} />
          <span>ScreenX</span>
        </TrackedLink>
        <TrackedLink
          className="button button-secondary"
          eventName={analyticsEvents.navigationClick}
          eventProperties={{ destination: "home", location: "privacy_header", page: "privacy" }}
          href="/"
        >
          <Home size={18} aria-hidden="true" />
          Home
        </TrackedLink>
      </header>

      <article className="legal-content">
        <p className="eyebrow">Privacy</p>
        <h1>ScreenX keeps your workspace local.</h1>
        <p>
          ScreenX is a native macOS utility for arranging windows. The app uses macOS
          Accessibility permission to move and resize windows. It does not need Screen Recording
          permission for its core window placement workflow.
        </p>
        <h2>Native app</h2>
        <p>
          ScreenX does not upload your window titles, app list, layout choices, saved workspaces,
          or display setup to ScreenX servers. Window arrangement happens on your Mac.
        </p>
        <h2>Website analytics</h2>
        <p>
          The website uses Vercel Web Analytics and Speed Insights to understand visits, pages,
          download starts, interaction events, and performance. These metrics help improve the
          landing page and release flow.
        </p>
        <h2>Downloads</h2>
        <p>
          Download buttons route through <code>/download</code> so the site can count which
          version was requested before redirecting to the signed DMG file.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, use the project repository or creator links from the ScreenX
          homepage.
        </p>
      </article>
    </main>
  );
}
