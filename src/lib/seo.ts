import { absoluteURL, downloadRoute, latestRelease, releases } from "@/src/lib/releases";

export const siteURL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://screenx.scrubmac.app";

export const seoTitle = "ScreenX - Mac Window Manager with Drag Preview and Custom Grids";

export const seoDescription =
  "ScreenX is an open-source macOS window manager for Command-drag previews, quick layouts, per-screen grids, saved workspaces, and precise window snapping.";

export const seoKeywords = [
  "ScreenX",
  "Mac window manager",
  "macOS window manager",
  "Mac window snapping",
  "window tiling macOS",
  "macOS split screen",
  "Mac desktop organization",
  "Command drag window layout",
  "per-screen grids",
  "saved workspaces",
  "open source macOS app",
  "Developer ID notarized Mac app",
];

export const seoImage = {
  url: "/images/seo/screenx-og.png",
  width: 1200,
  height: 630,
  alt: "ScreenX for macOS: arrange windows with live drag previews, grids, hotkeys, and saved workspaces.",
};

export const twitterImage = {
  url: "/images/seo/screenx-twitter.png",
  width: 1200,
  height: 630,
  alt: seoImage.alt,
};

export const faqItems = [
  {
    question: "What is ScreenX?",
    answer:
      "ScreenX is a native macOS window manager that helps you arrange open app windows with live drag previews, quick layout hotkeys, per-screen grids, and saved workspaces.",
  },
  {
    question: "Does ScreenX need Screen Recording permission?",
    answer:
      "No. ScreenX controls window position through macOS Accessibility permission and does not need Screen Recording to arrange windows.",
  },
  {
    question: "Can each display have a different layout?",
    answer:
      "Yes. ScreenX supports per-display rows, columns, and gaps so a laptop, ultrawide display, and vertical monitor can each use a different canvas.",
  },
  {
    question: "Is ScreenX signed and notarized?",
    answer:
      "Yes. Public ScreenX downloads are Developer ID signed, Apple-notarized, and stapled for Gatekeeper.",
  },
  {
    question: "Is ScreenX open source?",
    answer:
      "Yes. ScreenX is open source under the MIT License, and the source code is available on GitHub at SyntaxFear/screenX.",
  },
];

export function sitePath(path = "/") {
  return absoluteURL(siteURL, path);
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ScreenX",
    alternateName: "ScreenX for macOS",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "macOS window manager",
    operatingSystem: "macOS 13 or later",
    url: siteURL,
    downloadUrl: sitePath(downloadRoute(latestRelease.version, "json_ld")),
    installUrl: sitePath(downloadRoute(latestRelease.version, "json_ld")),
    codeRepository: "https://github.com/SyntaxFear/screenX",
    image: sitePath("/images/screenx-icon.png"),
    screenshot: [
      sitePath("/images/screens/screenx-arrange.png"),
      sitePath("/images/screens/screenx-windows.png"),
      sitePath("/images/screens/screenx-saved.png"),
      sitePath("/images/screens/screenx-settings.png"),
    ],
    softwareVersion: latestRelease.version,
    fileSize: `${(latestRelease.fileSizeBytes / 1_000_000).toFixed(1)} MB`,
    description: seoDescription,
    featureList: [
      "Command-drag window placement with live preview",
      "Quick layout hotkeys for halves, thirds, quarters, center, maximize, and two-thirds layouts",
      "Per-screen rows, columns, and gap settings",
      "Saved workspaces for repeated desktop arrangements",
      "Native macOS Accessibility-based window control without Screen Recording permission",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: sitePath(downloadRoute(latestRelease.version, "json_ld_offer")),
    },
    publisher: {
      "@type": "Organization",
      name: "SyntaxFear",
      url: "https://github.com/SyntaxFear",
      sameAs: [
        "https://github.com/SyntaxFear/screenX",
        "https://www.linkedin.com/in/levani-parastashvili/",
        "https://x.com/Parastashvilii",
      ],
    },
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    license: "https://github.com/SyntaxFear/screenX/blob/main/LICENSE",
    sha256: latestRelease.sha256,
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ScreenX",
    url: siteURL,
    description: seoDescription,
    publisher: {
      "@type": "Organization",
      name: "SyntaxFear",
      url: "https://github.com/SyntaxFear",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SyntaxFear",
    url: "https://github.com/SyntaxFear",
    sameAs: [
      "https://github.com/SyntaxFear/screenX",
      "https://www.linkedin.com/in/levani-parastashvili/",
      "https://x.com/Parastashvilii",
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function releasesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ScreenX Releases",
    url: sitePath("/releases"),
    description: "Download current and older signed, notarized ScreenX releases for macOS.",
    mainEntity: releases.map((release) => ({
      "@type": "SoftwareApplication",
      name: release.title,
      softwareVersion: release.version,
      operatingSystem: `macOS ${release.minMacOS} or later`,
      downloadUrl: sitePath(downloadRoute(release.version, "json_ld_releases")),
      fileSize: `${(release.fileSizeBytes / 1_000_000).toFixed(1)} MB`,
      sha256: release.sha256,
    })),
  };
}

export function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteURL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Releases",
        item: sitePath("/releases"),
      },
    ],
  };
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
