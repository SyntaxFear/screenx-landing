export const analyticsEvents = {
  ctaClick: "CTA Click",
  downloadClick: "Download Click",
  downloadStarted: "Download Started",
  externalLinkClick: "External Link Click",
  navigationClick: "Navigation Click",
  sectionViewed: "Section Viewed",
} as const;

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents];
export type AnalyticsProperties = Record<string, string | number | boolean | null>;

export function safeAnalyticsValue(value: string | null | undefined, fallback = "unknown") {
  return (value?.trim() || fallback).slice(0, 80);
}
