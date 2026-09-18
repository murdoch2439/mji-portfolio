import { useEffect, useRef } from "react";
import { useGlobalStore } from "../store/Context";

export const HOME_SCROLL_SECTION_IDS = [
  "",
  "about",
  "experience",
  "services",
  "portfolio",
  "testimonials",
  "contact",
] as const;

type UseScrollSpyOptions = {
  /**
   * Where in the viewport the "active line" sits (0 = top, 1 = bottom).
   * The section that currently contains this line becomes active —
   * independent of how tall or short the section is.
   */
  viewportOffsetRatio?: number;
  /** Attribute used to find section roots (set by SectionComponent). */
  attribute?: string;
};

/**
 * Adaptive scroll-spy: activates the section that contains a fixed
 * viewport marker line, so tall sections (e.g. portfolio) are not skipped.
 */
export function useScrollSpy(
  sectionIds: readonly string[],
  options: UseScrollSpyOptions = {}
) {
  const { setActiveSection, activeSection } = useGlobalStore();
  const { viewportOffsetRatio = 0.28, attribute = "data-scroll-section" } =
    options;
  const activeRef = useRef(activeSection);

  useEffect(() => {
    activeRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const resolveActiveId = (): string => {
      const markerY = window.innerHeight * viewportOffsetRatio;
      let current = sectionIds[0] ?? "";

      // Last section whose top has crossed the marker — works for any height.
      for (const id of sectionIds) {
        const el = document.querySelector<HTMLElement>(
          `[${attribute}="${id}"]`
        );
        if (!el) continue;
        if (el.getBoundingClientRect().top <= markerY) {
          current = id;
        }
      }

      return current;
    };

    let frame = 0;
    const sync = () => {
      const next = resolveActiveId();
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActiveSection(next);
      }
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [sectionIds, viewportOffsetRatio, attribute, setActiveSection]);
}
