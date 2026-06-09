"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiamondMedia } from "@/components/diamond-media";
import { useComparison } from "@/lib/comparison-state";
import { getDiamondImageUrl } from "@/lib/diamond-images";
import { formatDiamondTitle, mockDiamonds } from "@/lib/mock-diamonds";
import { cn } from "@/lib/utils";

export function CompareDock() {
  const { selectedIds, removeDiamond, clearComparison, openDrawer } = useComparison();
  const visible = selectedIds.length > 0;
  const selectedDiamonds = selectedIds
    .map((id) => mockDiamonds.find((diamond) => diamond.id === id))
    .filter((diamond): diamond is (typeof mockDiamonds)[number] => Boolean(diamond));

  const mobileVisible = selectedDiamonds.slice(0, 3);
  const mobileOverflow = selectedDiamonds.length - mobileVisible.length;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 border-t border-rc-border bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.06)] transition-transform duration-200 ease-out",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-6 md:h-16">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 md:hidden">
            {mobileVisible.map((diamond) => (
              <DockThumbnail key={diamond.id} diamondId={diamond.id} shape={diamond.shape} onRemove={removeDiamond} />
            ))}
            {mobileOverflow > 0 ? (
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-rc-border bg-rc-hover text-xs font-medium text-neutral-700">
                +{mobileOverflow}
              </div>
            ) : null}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            {selectedDiamonds.map((diamond) => (
              <DockThumbnail key={diamond.id} diamondId={diamond.id} shape={diamond.shape} onRemove={removeDiamond} />
            ))}
          </div>
        </div>

        <p className="whitespace-nowrap text-sm text-neutral-700">
          {selectedIds.length} diamond{selectedIds.length === 1 ? "" : "s"} selected
        </p>

        <div className="flex-1" />

        <button
          type="button"
          className="text-sm text-neutral-500 underline-offset-4 transition-colors duration-150 hover:underline"
          onClick={clearComparison}
        >
          Clear
        </button>

        <Button className="h-10 bg-neutral-900 px-6 font-medium text-white hover:bg-neutral-800" onClick={openDrawer}>
          Compare ({selectedIds.length})
        </Button>
      </div>
    </div>
  );
}

type DockThumbnailProps = {
  diamondId: string;
  shape: (typeof mockDiamonds)[number]["shape"];
  onRemove: (id: string) => void;
};

function DockThumbnail({ diamondId, shape, onRemove }: DockThumbnailProps) {
  const diamond = mockDiamonds.find((item) => item.id === diamondId);
  const imageUrl = diamond ? getDiamondImageUrl(diamond) : null;

  return (
    <div className="group relative h-10 w-10 overflow-hidden rounded-md border border-rc-border bg-neutral-100">
      <DiamondMedia
        imageUrl={imageUrl}
        shape={shape}
        alt={diamond ? formatDiamondTitle(diamond) : "Diamond"}
        className="h-full w-full"
        sizes="40px"
      />
      <button
        type="button"
        aria-label="Remove from comparison"
        className="absolute -right-1 -top-1 hidden h-4 w-4 items-center justify-center rounded-full border border-rc-border bg-white text-neutral-600 group-hover:flex"
        onClick={() => onRemove(diamondId)}
      >
        <X className="h-2.5 w-2.5" aria-hidden="true" />
      </button>
    </div>
  );
}
