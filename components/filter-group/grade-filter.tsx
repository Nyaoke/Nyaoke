"use client";

import { cn } from "@/lib/utils";

type GradeFilterProps<T extends string> = {
  label: string;
  options: readonly T[];
  selected: T[];
  columns?: 2 | 3 | 4;
  onToggle: (value: T) => void;
};

export function GradeFilter<T extends string>({
  label,
  options,
  selected,
  columns = 4,
  onToggle,
}: GradeFilterProps<T>) {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-medium uppercase tracking-wide text-rc-muted">{label}</h2>
      <div
        className={cn(
          "grid gap-2",
          columns === 2 && "grid-cols-2",
          columns === 3 && "grid-cols-3",
          columns === 4 && "grid-cols-4",
        )}
      >
        {options.map((option) => {
          const isActive = selected.includes(option);

          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onToggle(option)}
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
    </section>
  );
}
