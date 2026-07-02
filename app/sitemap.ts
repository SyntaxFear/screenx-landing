import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://screenx-landing.vercel.app";

  return [
    {
      url: base,
      lastModified: new Date("2026-07-03"),
    },
    {
      url: `${base}/releases`,
      lastModified: new Date("2026-07-03"),
    },
  ];
}
