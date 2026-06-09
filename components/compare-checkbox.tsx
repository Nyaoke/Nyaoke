"use client";

import { Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useComparison } from "@/lib/comparison-state";
import { cn } from "@/lib/utils";

type CompareCheckboxProps = {
  diamondId: string;
};

export function CompareCheckbox({ diamondId }: CompareCheckboxProps) {
  const { isSelected, toggleDiamond } = useComparison();
  const checked = isSelected(diamondId);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={checked ? "Remove from comparison" : "Compare"}
          aria-pressed={checked}
          className={cn(
            "absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-md border border-rc-border bg-white transition-colors duration-150",
            checked && "border-rc-text bg-rc-text text-white",
          )}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleDiamond(diamondId);
          }}
          onKeyDown={(event) => {
            if (event.key === " ") {
              event.preventDefault();
              event.stopPropagation();
              toggleDiamond(diamondId);
            }
          }}
        >
          {checked ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : null}
        </button>
      </TooltipTrigger>
      <TooltipContent>Compare</TooltipContent>
    </Tooltip>
  );
}
