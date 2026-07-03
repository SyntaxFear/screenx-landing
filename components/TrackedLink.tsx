"use client";

import { type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics/react";
import { type AnalyticsEventName, type AnalyticsProperties } from "@/src/lib/analytics";

type TrackedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  children: ReactNode;
  eventName: AnalyticsEventName;
  eventProperties?: AnalyticsProperties;
  href: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function TrackedLink({
  children,
  eventName,
  eventProperties,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (!event.defaultPrevented) {
      track(eventName, eventProperties);
    }
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
