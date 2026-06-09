"use client";

import { LAB_OPTIONS, LabOption } from "@/lib/filter-types";
import { cn } from "@/lib/utils";

type LabNaturalToggleProps = {
  value: LabOption;
  onChange: (value: LabOption) => void;
};

export function LabNaturalToggle({ value, onChange }: LabNaturalToggleProps) {
  return (
    <section className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {LAB_OPTIONS.map((option) => {
          const isActive = value === option;

          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option)}
              className={cn(
                "h-9 rounded-md border px-3 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rc-text focus-visible:ring-offset-2",
                isActive
                  ? "border-rc-text bg-rc-text text-white"
                  : "border-rc-border bg-white text-rc-text hover:bg-rc-hover",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
      <a href="#" className="text-xs text-rc-muted underline-offset-4 hover:text-rc-text hover:underline">
        What's the difference?
      </a>
    </section>
  );
}
