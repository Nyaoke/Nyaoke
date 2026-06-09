"use client";

import { SHAPE_OPTIONS, ShapeOption } from "@/lib/filter-types";
import { cn } from "@/lib/utils";

type ShapeFilterProps = {
  value: ShapeOption;
  onChange: (value: ShapeOption) => void;
};

export function ShapeFilter({ value, onChange }: ShapeFilterProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-medium uppercase tracking-wide text-rc-muted">Shape</h2>
      <div className="grid grid-cols-2 gap-2">
        {SHAPE_OPTIONS.map((shape) => {
          const isActive = value === shape;

          return (
            <button
              key={shape}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(shape)}
              className={cn(
                "flex h-16 flex-col items-center justify-center gap-1 rounded-lg border px-2 text-xs transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rc-text focus-visible:ring-offset-2",
                isActive
                  ? "border-rc-text bg-rc-text text-white"
                  : "border-rc-border bg-white text-rc-text hover:bg-rc-hover",
              )}
            >
              <ShapeMark shape={shape} active={isActive} />
              <span>{shape}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ShapeMark({ shape, active }: { shape: ShapeOption; active: boolean }) {
  const stroke = active ? "border-white" : "border-rc-text";
  const fill = active ? "bg-white/10" : "bg-white";

  if (shape === "Round") {
    return <span className={cn("h-5 w-5 rounded-full border", stroke, fill)} aria-hidden="true" />;
  }

  if (shape === "Oval") {
    return <span className={cn("h-5 w-3.5 rounded-full border", stroke, fill)} aria-hidden="true" />;
  }

  if (shape === "Cushion") {
    return <span className={cn("h-5 w-5 rounded-md border", stroke, fill)} aria-hidden="true" />;
  }

  if (shape === "Emerald") {
    return <span className={cn("h-5 w-4 rounded-sm border", stroke, fill)} aria-hidden="true" />;
  }

  if (shape === "Princess") {
    return <span className={cn("h-5 w-5 border", stroke, fill)} aria-hidden="true" />;
  }

  if (shape === "Radiant") {
    return (
      <span className={cn("h-5 w-5 rotate-45 rounded-sm border", stroke, fill)} aria-hidden="true" />
    );
  }

  if (shape === "Pear") {
    return (
      <span
        className={cn("h-5 w-4 rounded-b-full rounded-t-sm border", stroke, fill)}
        aria-hidden="true"
      />
    );
  }

  if (shape === "Marquise") {
    return (
      <span
        className={cn("h-5 w-3 rounded-[50%_50%_50%_50%/12%_12%_88%_88%] border", stroke, fill)}
        aria-hidden="true"
      />
    );
  }

  if (shape === "Asscher") {
    return <span className={cn("h-5 w-5 rounded-sm border", stroke, fill)} aria-hidden="true" />;
  }

  return (
    <span
      className={cn("h-5 w-5 rotate-45 rounded-t-full border border-l-0 border-t-0", stroke, fill)}
      aria-hidden="true"
    />
  );
}
