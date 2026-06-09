"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ActiveFilterChip } from "@/lib/filter-types";
import { FilterChip } from "@/components/filter-chip";
import { OverflowPopover } from "@/components/overflow-popover";
import { cn } from "@/lib/utils";

type ActiveFilterChipRowProps = {
  chips: ActiveFilterChip[];
  onRemove: (chip: ActiveFilterChip) => void;
  onReset: () => void;
};

const GAP_WIDTH = 8;

export function ActiveFilterChipRow({ chips, onRemove, onReset }: ActiveFilterChipRowProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const chipMeasureRefs = useRef(new Map<string, HTMLSpanElement>());
  const moreMeasureRef = useRef<HTMLButtonElement | null>(null);
  const resetMeasureRef = useRef<HTMLButtonElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isMeasured, setIsMeasured] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(chips.length > 0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (chips.length > 0) {
      const timeout = window.setTimeout(() => setShouldRender(true), 0);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setIsMeasured(false);
      setShouldRender(false);
    }, 150);
    return () => window.clearTimeout(timeout);
  }, [chips.length]);

  const measure = useCallback(() => {
    if (isMobile) {
      setVisibleCount(chips.length);
      setIsMeasured(true);
      return;
    }

    const row = rowRef.current;
    const moreButton = moreMeasureRef.current;
    const resetButton = resetMeasureRef.current;
    if (!row || !moreButton || !resetButton) {
      return;
    }

    const rowWidth = row.clientWidth;
    const chipWidths = chips.map((chip) => chipMeasureRefs.current.get(chip.id)?.getBoundingClientRect().width ?? 0);
    const resetWidth = resetButton.getBoundingClientRect().width;
    const moreWidth = moreButton.getBoundingClientRect().width;
    const allChipsWidth = chipWidths.reduce((total, width) => total + width, 0);
    const allItemsWidth = allChipsWidth + resetWidth + chips.length * GAP_WIDTH;

    if (allItemsWidth <= rowWidth) {
      setVisibleCount(chips.length);
      setIsMeasured(true);
      return;
    }

    let nextVisibleCount = 0;
    let runningWidth = 0;

    for (let index = 0; index <= chipWidths.length; index += 1) {
      const itemCount = index + 2;
      const gapsWidth = Math.max(0, itemCount - 1) * GAP_WIDTH;
      const candidateWidth = runningWidth + moreWidth + resetWidth + gapsWidth;

      if (candidateWidth <= rowWidth) {
        nextVisibleCount = index;
      }

      runningWidth += chipWidths[index] ?? 0;
    }

    setVisibleCount(nextVisibleCount);
    setIsMeasured(true);
  }, [chips, isMobile]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(measure);
    return () => window.cancelAnimationFrame(frame);
  }, [measure]);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) {
      return;
    }

    const observer = new ResizeObserver(() => {
      measure();
    });
    observer.observe(row);

    return () => observer.disconnect();
  }, [measure]);

  const visibleChips = useMemo(() => chips.slice(0, visibleCount), [chips, visibleCount]);
  const hiddenChips = useMemo(() => chips.slice(visibleCount), [chips, visibleCount]);

  if (!shouldRender) {
    return null;
  }

  const hasActiveChips = chips.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-150",
        hasActiveChips ? "mb-6 max-h-32 opacity-100" : "mb-0 max-h-0 opacity-0",
      )}
    >
      <div className="md:hidden">
        <div className="relative">
          <div className="flex snap-x gap-2 overflow-x-auto pb-1 pr-12">
            {chips.map((chip) => (
              <FilterChip key={chip.id} chip={chip} onRemove={onRemove} />
            ))}
          </div>
          <div
            className="pointer-events-none absolute right-0 top-0 h-9 w-12 bg-gradient-to-l from-white to-transparent"
            aria-hidden="true"
          />
        </div>
        <button type="button" onClick={onReset} className={resetLinkClassName("mt-2")}>
          Reset filters
        </button>
      </div>

      <div className="relative hidden md:block">
        <div
          ref={rowRef}
          className={cn(
            "flex w-full items-center gap-2 overflow-hidden transition-opacity duration-150",
            isMeasured ? "opacity-100" : "opacity-0",
          )}
        >
          {visibleChips.map((chip) => (
            <FilterChip key={chip.id} chip={chip} onRemove={onRemove} />
          ))}

          <OverflowPopover
            hiddenChips={hiddenChips}
            open={popoverOpen && hiddenChips.length > 0 && hasActiveChips}
            onOpenChange={setPopoverOpen}
            onRemove={onRemove}
            onReset={onReset}
          />

          <button type="button" onClick={onReset} className={resetLinkClassName("ml-auto shrink-0")}>
            Reset filters
          </button>
        </div>

        <div
          className="pointer-events-none invisible absolute left-0 top-0 flex h-0 gap-2 overflow-hidden whitespace-nowrap"
          aria-hidden="true"
        >
          {chips.map((chip) => (
            <span
              key={chip.id}
              ref={(node) => {
                if (node) {
                  chipMeasureRefs.current.set(chip.id, node);
                } else {
                  chipMeasureRefs.current.delete(chip.id);
                }
              }}
            >
              <FilterChip chip={chip} tabIndex={-1} />
            </span>
          ))}
          <button
            ref={moreMeasureRef}
            type="button"
            tabIndex={-1}
            className="inline-flex h-9 shrink-0 items-center rounded-md border border-rc-border bg-white px-3 text-sm font-medium text-rc-text"
          >
            +{chips.length} more
          </button>
          <button ref={resetMeasureRef} type="button" tabIndex={-1} className={resetLinkClassName("shrink-0")}>
            Reset filters
          </button>
        </div>
      </div>
    </div>
  );
}

function resetLinkClassName(className?: string) {
  return cn(
    "text-sm text-rc-muted underline-offset-4 transition-colors duration-150 hover:text-rc-text hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rc-text focus-visible:ring-offset-2",
    className,
  );
}
