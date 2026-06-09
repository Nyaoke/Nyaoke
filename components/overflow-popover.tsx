"use client";

import { ActiveFilterChip } from "@/lib/filter-types";
import { FilterChip } from "@/components/filter-chip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

type OverflowPopoverProps = {
  hiddenChips: ActiveFilterChip[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRemove: (chip: ActiveFilterChip) => void;
  onReset: () => void;
};

export function OverflowPopover({
  hiddenChips,
  open,
  onOpenChange,
  onRemove,
  onReset,
}: OverflowPopoverProps) {
  if (hiddenChips.length === 0) {
    return null;
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="inline-flex h-9 shrink-0 items-center rounded-md border border-rc-border bg-white px-3 text-sm font-medium text-rc-text transition-colors duration-150 hover:bg-rc-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rc-text focus-visible:ring-offset-2"
          aria-label={`${hiddenChips.length} hidden filters`}
        >
          +{hiddenChips.length} more
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" onEscapeKeyDown={() => onOpenChange(false)}>
        <div className="flex items-center justify-between border-b border-rc-border px-4 py-3">
          <h2 className="text-xs font-medium uppercase tracking-wide text-rc-muted">Hidden filters</h2>
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-rc-muted underline-offset-4 transition-colors duration-150 hover:text-rc-text hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rc-text focus-visible:ring-offset-2"
          >
            Clear all
          </button>
        </div>
        <ScrollArea className="max-h-96">
          <div className="flex flex-col gap-2 p-4">
            {hiddenChips.map((chip) => (
              <FilterChip key={chip.id} chip={chip} onRemove={onRemove} className="justify-between" />
            ))}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
