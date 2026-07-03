import type { MetadataRoute } from "next";
import { sitePath, siteURL } from "@/src/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    host: siteURL,
    sitemap: sitePath("/sitemap.xml"),
  };
}
