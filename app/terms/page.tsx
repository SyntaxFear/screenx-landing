import type { Metadata } from "next";
import Image from "next/image";
import { Home } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";
import { analyticsEvents } from "@/src/lib/analytics";
import { seoImage, sitePath } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms for downloading and using ScreenX, an open-source native macOS window manager distributed as a signed and notarized DMG.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "ScreenX Terms",
    description: "Terms for downloading and using the open-source ScreenX macOS app.",
    url: sitePath("/terms"),
    images: [seoImage],
  },
};

export default function TermsPage() {
  return (
    <main className="archive-page legal-page">
      <header className="archive-header">
        <TrackedLink
          className="brand-link"
          eventName={analyticsEvents.navigationClick}
          eventProperties={{ destination: "home", location: "terms_header_brand", page: "terms" }}
          href="/"
          aria-label="ScreenX home"
        >
          <Image src="/images/screenx-icon.png" alt="" width={36} height={36} />
          <span>ScreenX</span>
        </TrackedLink>
        <TrackedLink
          className="button button-secondary"
          eventName={analyticsEvents.navigationClick}
          eventProperties={{ destination: "home", location: "terms_header", page: "terms" }}
          href="/"
        >
          <Home size={18} aria-hidden="true" />
          Home
        </TrackedLink>
      </header>

      <article className="legal-content">
        <p className="eyebrow">Terms</p>
        <h1>Use ScreenX responsibly on your Mac.</h1>
        <p>
          ScreenX is distributed as an open-source macOS utility for arranging application windows.
          Public builds are provided as Developer ID signed and Apple-notarized DMG downloads.
        </p>
        <h2>License</h2>
        <p>
          The ScreenX source code is available under the MIT License in the public GitHub
          repository. The license terms in that repository govern source-code use.
        </p>
        <h2>Direct download</h2>
        <p>
          ScreenX is distributed directly from this website. Always download ScreenX from
          <code>screenx.scrubmac.app</code> or the official project repository.
        </p>
        <h2>No affiliation</h2>
        <p>
          ScreenX is not affiliated with Apple. macOS, Mac, and related platform names belong to
          Apple.
        </p>
        <h2>No warranty</h2>
        <p>
          ScreenX is provided as-is. Review permissions and window changes before using it in
          critical workflows.
        </p>
      </article>
    </main>
  );
}
