"use client";

import { RangeValue } from "@/lib/filter-types";
import { cn } from "@/lib/utils";

const quickPicks: Array<{ label: string; value: RangeValue }> = [
  { label: "<1ct", value: { max: 0.99 } },
  { label: "1ct+", value: { min: 1 } },
  { label: "1.5ct+", value: { min: 1.5 } },
  { label: "2ct+", value: { min: 2 } },
  { label: "2.5ct+", value: { min: 2.5 } },
  { label: "3ct+", value: { min: 3 } },
  { label: "3.5ct+", value: { min: 3.5 } },
  { label: "4ct+", value: { min: 4 } },
  { label: "5ct+", value: { min: 5 } },
];

type CaratQuickPicksProps = {
  value: RangeValue;
  onChange: (value: RangeValue) => void;
};

export function CaratQuickPicks({ value, onChange }: CaratQuickPicksProps) {
  return (
    <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
      {quickPicks.map((quickPick) => {
        const isActive = value.min === quickPick.value.min && value.max === quickPick.value.max;

        return (
          <button
            key={quickPick.label}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(quickPick.value)}
            className={cn(
              "h-8 shrink-0 rounded-full border px-4 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rc-text focus-visible:ring-offset-2",
              isActive
                ? "border-rc-text bg-rc-text text-white"
                : "border-rc-border bg-white text-rc-text hover:bg-rc-hover",
            )}
          >
            {quickPick.label}
          </button>
        );
      })}
    </div>
  );
}
