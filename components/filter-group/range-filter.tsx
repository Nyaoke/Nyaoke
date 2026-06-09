"use client";

import { RangeValue } from "@/lib/filter-types";
import { cn } from "@/lib/utils";

type QuickPick = {
  label: string;
  value: RangeValue;
};

type RangeFilterProps = {
  label: string;
  value: RangeValue;
  minPlaceholder: string;
  maxPlaceholder: string;
  quickPicks?: QuickPick[];
  prefix?: string;
  step?: string;
  onChange: (value: RangeValue) => void;
};

export function RangeFilter({
  label,
  value,
  minPlaceholder,
  maxPlaceholder,
  quickPicks = [],
  prefix,
  step = "0.01",
  onChange,
}: RangeFilterProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-medium uppercase tracking-wide text-rc-muted">{label}</h2>
      <div className="grid grid-cols-2 gap-2">
        <NumberInput
          ariaLabel={`${label} minimum`}
          value={value.min}
          placeholder={minPlaceholder}
          prefix={prefix}
          step={step}
          onChange={(min) => onChange({ ...value, min })}
        />
        <NumberInput
          ariaLabel={`${label} maximum`}
          value={value.max}
          placeholder={maxPlaceholder}
          prefix={prefix}
          step={step}
          onChange={(max) => onChange({ ...value, max })}
        />
      </div>
      {quickPicks.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {quickPicks.map((quickPick) => {
            const isActive = value.min === quickPick.value.min && value.max === quickPick.value.max;

            return (
              <button
                key={quickPick.label}
                type="button"
                aria-pressed={isActive}
                onClick={() => onChange(quickPick.value)}
                className={cn(
                  "h-8 rounded-md border px-2.5 text-xs transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rc-text focus-visible:ring-offset-2",
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
      ) : null}
    </section>
  );
}

type NumberInputProps = {
  ariaLabel: string;
  value?: number;
  placeholder: string;
  prefix?: string;
  step: string;
  onChange: (value?: number) => void;
};

function NumberInput({ ariaLabel, value, placeholder, prefix, step, onChange }: NumberInputProps) {
  return (
    <label className="relative block">
      {prefix ? (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-rc-muted">
          {prefix}
        </span>
      ) : null}
      <input
        aria-label={ariaLabel}
        type="number"
        min="0"
        step={step}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={(event) => {
          const nextValue = event.target.value === "" ? undefined : Number(event.target.value);
          onChange(Number.isFinite(nextValue) ? nextValue : undefined);
        }}
        className={cn(
          "h-9 w-full rounded-md border border-rc-border bg-white px-3 text-sm text-rc-text transition-colors duration-150 placeholder:text-rc-muted hover:border-neutral-300 focus:border-rc-text focus:outline-none",
          prefix && "pl-7",
        )}
      />
    </label>
  );
}
