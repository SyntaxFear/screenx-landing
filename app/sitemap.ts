import type { MetadataRoute } from "next";
import { sitePath } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-03");

  return [
    {
      url: sitePath("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [sitePath("/images/seo/screenx-og.png")],
    },
    {
      url: sitePath("/releases"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: sitePath("/privacy"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.62,
    },
    {
      url: sitePath("/terms"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.58,
    },
    {
      url: sitePath("/llms.txt"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: sitePath("/llms-full.txt"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.72,
    },
  ];
}
