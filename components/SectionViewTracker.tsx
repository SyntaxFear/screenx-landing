"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics/react";
import { analyticsEvents } from "@/src/lib/analytics";

type TrackedSection = {
  id: string;
  label: string;
};

type SectionViewTrackerProps = {
  page: string;
  sections: TrackedSection[];
};

export function SectionViewTracker({ page, sections }: SectionViewTrackerProps) {
  useEffect(() => {
    const viewed = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const section = sections.find((item) => item.id === entry.target.id);

          if (!section || viewed.has(section.id)) {
            continue;
          }

          viewed.add(section.id);
          track(analyticsEvents.sectionViewed, {
            page,
            section_id: section.id,
            section_label: section.label,
          });
        }
      },
      {
        rootMargin: "-12% 0px -28%",
        threshold: 0.32,
      },
    );

    for (const section of sections) {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [page, sections]);

  return null;
}
