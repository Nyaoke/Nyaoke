"use client";

import { Dispatch } from "react";
import { GradeFilter } from "@/components/filter-group/grade-filter";
import { RangeFilter } from "@/components/filter-group/range-filter";
import { ShapeFilter } from "@/components/filter-group/shape-filter";
import { Separator } from "@/components/ui/separator";
import {
  CERTIFICATION_OPTIONS,
  CLARITY_OPTIONS,
  COLOR_OPTIONS,
  CUT_OPTIONS,
  FilterState,
  LAB_OPTIONS,
} from "@/lib/filter-types";
import { FilterAction } from "@/lib/filter-state";
import { cn } from "@/lib/utils";

type FilterSidebarProps = {
  state: FilterState;
  dispatch: Dispatch<FilterAction>;
  className?: string;
};

const caratQuickPicks = [
  { label: "<1ct", value: { max: 0.99 } },
  { label: "1ct+", value: { min: 1 } },
  { label: "1.5ct+", value: { min: 1.5 } },
  { label: "2ct+", value: { min: 2 } },
  { label: "2.5ct+", value: { min: 2.5 } },
  { label: "3ct+", value: { min: 3 } },
  { label: "4ct+", value: { min: 4 } },
  { label: "5ct+", value: { min: 5 } },
];

export function FilterSidebar({ state, dispatch, className }: FilterSidebarProps) {
  return (
    <aside className={cn("w-full space-y-6 text-sm text-rc-text md:w-72 md:shrink-0", className)}>
      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-wide text-rc-muted">Lab vs Natural</h2>
        <div className="grid grid-cols-2 gap-2">
          {LAB_OPTIONS.map((option) => {
            const isActive = state.lab === option;

            return (
              <button
                key={option}
                type="button"
                aria-pressed={isActive}
                onClick={() => dispatch({ type: "setLab", value: option })}
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

      <Separator />

      <ShapeFilter value={state.shape} onChange={(value) => dispatch({ type: "setShape", value })} />

      <RangeFilter
        label="Carat"
        value={state.carat}
        minPlaceholder="Min"
        maxPlaceholder="Max"
        quickPicks={caratQuickPicks}
        onChange={(value) => dispatch({ type: "setRange", key: "carat", value })}
      />

      <GradeFilter
        label="Color"
        options={COLOR_OPTIONS}
        selected={state.color}
        onToggle={(value) => dispatch({ type: "toggleMulti", key: "color", value })}
      />

      <GradeFilter
        label="Cut"
        columns={2}
        options={CUT_OPTIONS}
        selected={state.cut}
        onToggle={(value) => dispatch({ type: "toggleMulti", key: "cut", value })}
      />

      <GradeFilter
        label="Clarity"
        options={CLARITY_OPTIONS}
        selected={state.clarity}
        onToggle={(value) => dispatch({ type: "toggleMulti", key: "clarity", value })}
      />

      <RangeFilter
        label="Price"
        value={state.price}
        minPlaceholder="Min"
        maxPlaceholder="Max"
        prefix="$"
        step="1"
        onChange={(value) => dispatch({ type: "setRange", key: "price", value })}
      />

      <GradeFilter
        label="Certification"
        columns={3}
        options={CERTIFICATION_OPTIONS}
        selected={state.certification}
        onToggle={(value) => dispatch({ type: "toggleMulti", key: "certification", value })}
      />

      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-wide text-rc-muted">Quick ship</h2>
        <button
          type="button"
          aria-pressed={state.quickShip}
          onClick={() => dispatch({ type: "setQuickShip", value: !state.quickShip })}
          className={cn(
            "flex h-9 w-full items-center justify-between rounded-md border px-3 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rc-text focus-visible:ring-offset-2",
            state.quickShip
              ? "border-rc-text bg-rc-text text-white"
              : "border-rc-border bg-white text-rc-text hover:bg-rc-hover",
          )}
        >
          <span>Available now</span>
          <span
            className={cn(
              "h-4 w-4 rounded-sm border transition-colors duration-150",
              state.quickShip ? "border-white bg-white" : "border-rc-border bg-white",
            )}
            aria-hidden="true"
          />
        </button>
      </section>
    </aside>
  );
}
