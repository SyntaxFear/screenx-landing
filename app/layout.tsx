import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { seoDescription, seoImage, seoKeywords, seoTitle, siteURL, twitterImage } from "@/src/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: {
    default: seoTitle,
    template: "%s | ScreenX",
  },
  description: seoDescription,
  applicationName: "ScreenX",
  authors: [{ name: "Levan Parastashvili", url: "https://www.linkedin.com/in/levani-parastashvili/" }],
  category: "technology",
  creator: "Levan Parastashvili",
  keywords: seoKeywords,
  manifest: "/manifest.webmanifest",
  publisher: "SyntaxFear",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteURL,
    siteName: "ScreenX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: seoImage.url,
        width: seoImage.width,
        height: seoImage.height,
        alt: seoImage.alt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: twitterImage.url,
        width: twitterImage.width,
        height: twitterImage.height,
        alt: twitterImage.alt,
      },
    ],
    creator: "@Parastashvilii",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
      { url: "/images/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/images/screenx-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/icon-180.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ScreenX",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#EEF4F0",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
