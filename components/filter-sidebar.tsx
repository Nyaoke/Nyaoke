"use client";

import { Dispatch } from "react";
import { ChevronDown } from "lucide-react";
import { BooleanFilter } from "@/components/filter-group/boolean-filter";
import { GradeFilter } from "@/components/filter-group/grade-filter";
import { LabNaturalToggle } from "@/components/filter-group/lab-natural-toggle";
import { RangeFilter } from "@/components/filter-group/range-filter";
import { ShapeFilter } from "@/components/filter-group/shape-filter";
import { Separator } from "@/components/ui/separator";
import {
  CERTIFICATION_OPTIONS,
  CLARITY_OPTIONS,
  COLOR_OPTIONS,
  CUT_OPTIONS,
  FilterState,
} from "@/lib/filter-types";
import { FilterAction } from "@/lib/filter-state";
import { cn } from "@/lib/utils";

type FilterSidebarProps = {
  state: FilterState;
  dispatch: Dispatch<FilterAction>;
  className?: string;
};

export function FilterSidebar({ state, dispatch, className }: FilterSidebarProps) {
  return (
    <aside className={cn("w-full space-y-6 text-sm text-rc-text md:w-72 md:shrink-0", className)}>
      <LabNaturalToggle value={state.lab} onChange={(value) => dispatch({ type: "setLab", value })} />

      <Separator />

      <ShapeFilter value={state.shape} onChange={(value) => dispatch({ type: "setShape", value })} />

      <RangeFilter
        label="Carat"
        helper="Enter the carat weight range for diamonds. Use decimal numbers for precise weights."
        value={state.carat}
        minPlaceholder="Min"
        maxPlaceholder="Max"
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

      <BooleanFilter
        label="Quick ship"
        checked={state.quickShip}
        onChange={(value) => dispatch({ type: "setQuickShip", value })}
      />

      <BooleanFilter
        label="Delivery by Holiday"
        checked={state.deliveryByHoliday}
        onChange={(value) => dispatch({ type: "setDeliveryByHoliday", value })}
      />

      <details className="group rounded-md border border-rc-border bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 text-sm font-medium text-rc-text transition-colors duration-150 hover:bg-rc-hover">
          More filters
          <ChevronDown className="h-4 w-4 text-rc-muted transition-transform duration-150 group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="space-y-6 border-t border-rc-border p-3">
          <section className="space-y-3">
            <h2 className="text-xs font-medium uppercase tracking-wide text-rc-muted">Ships as loose diamonds by</h2>
            <button className="h-9 w-full rounded-md border border-rc-border bg-white px-3 text-left text-sm text-rc-text transition-colors duration-150 hover:bg-rc-hover" type="button">
              Any date
            </button>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-medium uppercase tracking-wide text-rc-muted">Search by GIA/IGI Cert No.</h2>
            <div className="flex gap-2">
              <input
                className="h-9 min-w-0 flex-1 rounded-md border border-rc-border px-3 text-sm outline-none transition-colors duration-150 placeholder:text-rc-muted focus:border-rc-text"
                placeholder="GIA/IGI Number"
              />
              <button type="button" className="h-9 rounded-md border border-rc-text bg-rc-text px-3 text-sm text-white">
                Submit
              </button>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-medium uppercase tracking-wide text-rc-muted">Popular filters</h2>
            <div className="grid gap-2">
              {[
                "Image or Video Available",
                "Search Earring Pairs",
                "Search for Rings",
                "Search for Pendants",
                "Take the Quiz",
                "Dark Mode",
              ].map((label) => (
                <button key={label} type="button" className="h-9 rounded-md border border-rc-border bg-white px-3 text-left text-sm transition-colors duration-150 hover:bg-rc-hover">
                  {label}
                </button>
              ))}
            </div>
          </section>

          <GradeFilter
            label="Certification"
            columns={3}
            options={CERTIFICATION_OPTIONS}
            selected={state.certification}
            onToggle={(value) => dispatch({ type: "toggleMulti", key: "certification", value })}
          />
        </div>
      </details>

      <button
        type="button"
        onClick={() => dispatch({ type: "reset" })}
        className="text-sm text-rc-muted underline-offset-4 transition-colors duration-150 hover:text-rc-text hover:underline"
      >
        Reset Filters
      </button>
    </aside>
  );
}
