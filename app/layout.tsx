import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const siteURL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://screenx.scrubmac.app";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: {
    default: "ScreenX - Design your desktop canvas",
    template: "%s - ScreenX",
  },
  description:
    "ScreenX is a native macOS window manager for quick layouts, per-screen grids, live drag previews, and saved workspaces.",
  applicationName: "ScreenX",
  openGraph: {
    title: "ScreenX",
    description: "Design your desktop canvas with quick layouts, grids, and live previews for macOS.",
    url: siteURL,
    siteName: "ScreenX",
    images: [
      {
        url: "/images/screenx-hero-workspace.png",
        width: 2400,
        height: 1350,
        alt: "ScreenX workspace canvas preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScreenX",
    description: "Design your desktop canvas with quick layouts, grids, and live previews for macOS.",
    images: ["/images/screenx-hero-workspace.png"],
    creator: "@Parastashvilii",
  },
  icons: {
    icon: "/images/screenx-icon.png",
    apple: "/images/screenx-icon.png",
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
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
