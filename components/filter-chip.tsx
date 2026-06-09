"use client";

import { X } from "lucide-react";
import { ActiveFilterChip } from "@/lib/filter-types";
import { cn } from "@/lib/utils";

type FilterChipProps = {
  chip: ActiveFilterChip;
  onRemove?: (chip: ActiveFilterChip) => void;
  className?: string;
  tabIndex?: number;
};

export function FilterChip({ chip, onRemove, className, tabIndex }: FilterChipProps) {
  return (
    <button
      type="button"
      tabIndex={tabIndex}
      onClick={() => onRemove?.(chip)}
      className={cn(
        "inline-flex h-9 shrink-0 snap-start items-center gap-2 rounded-md border border-rc-text bg-rc-text px-3 text-sm text-white transition-colors duration-150 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rc-text focus-visible:ring-offset-2",
        className,
      )}
      aria-label={`Remove ${chip.group}: ${chip.value}`}
    >
      <span className="text-neutral-300">{chip.group}:</span>
      <span className="font-medium">{chip.value}</span>
      <X className="h-3.5 w-3.5" aria-hidden="true" />
    </button>
  );
}
