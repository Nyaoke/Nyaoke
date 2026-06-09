"use client";

import { cn } from "@/lib/utils";

type BooleanFilterProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function BooleanFilter({ label, checked, onChange }: BooleanFilterProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-medium uppercase tracking-wide text-rc-muted">{label}</h2>
      <button
        type="button"
        aria-pressed={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "flex h-9 w-full items-center justify-between rounded-md border px-3 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rc-text focus-visible:ring-offset-2",
          checked ? "border-rc-text bg-rc-text text-white" : "border-rc-border bg-white text-rc-text hover:bg-rc-hover",
        )}
      >
        <span>{label}</span>
        <span
          className={cn(
            "h-4 w-4 rounded-sm border transition-colors duration-150",
            checked ? "border-white bg-white" : "border-rc-border bg-white",
          )}
          aria-hidden="true"
        />
      </button>
    </section>
  );
}
