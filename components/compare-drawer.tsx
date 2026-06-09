"use client";

import { useEffect, useMemo, useState } from "react";
import { Copy, X } from "lucide-react";
import { toast } from "sonner";
import { CompareBadge } from "@/components/compare-badge";
import { CompareCell } from "@/components/compare-row";
import { DiamondMedia } from "@/components/diamond-media";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { formatCurrency } from "@/lib/filter-state";
import { getComparisonHighlights, getHighlightedIds } from "@/lib/comparison-highlights";
import { useComparison } from "@/lib/comparison-state";
import { getDiamondImageUrl } from "@/lib/diamond-images";
import { formatDiamondTitle, mockDiamonds } from "@/lib/mock-diamonds";

const COLOR_TOOLTIP = "D-F colorless, G-J near-colorless, K faint yellow";
const CLARITY_TOOLTIP = "FL/IF flawless, VVS very very slight, VS very slight, SI slight inclusions";

const ROW_LABELS = [
  "Image",
  "Title",
  "Price",
  "Comp value",
  "Quality score",
  "Shape",
  "Carat",
  "Color",
  "Clarity",
  "Cut",
  "Certification",
  "Vendor",
] as const;

export function CompareDrawer() {
  const { selectedIds, drawerOpen, closeDrawer, removeDiamond } = useComparison();
  const [copied, setCopied] = useState(false);

  const selectedDiamonds = useMemo(
    () =>
      selectedIds
        .map((id) => mockDiamonds.find((diamond) => diamond.id === id))
        .filter((diamond): diamond is (typeof mockDiamonds)[number] => Boolean(diamond)),
    [selectedIds],
  );

  const highlights = useMemo(() => getComparisonHighlights(selectedDiamonds), [selectedDiamonds]);
  const bestPriceIds = useMemo(() => getHighlightedIds(selectedDiamonds, "bestPrice", highlights), [selectedDiamonds, highlights]);
  const bestQualityIds = useMemo(
    () => getHighlightedIds(selectedDiamonds, "bestQuality", highlights),
    [selectedDiamonds, highlights],
  );

  useEffect(() => {
    if (!drawerOpen) {
      setCopied(false);
    }
  }, [drawerOpen]);

  const copyComparisonLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast("Unable to copy link");
    }
  };

  const gridTemplateColumns = `10rem repeat(${Math.max(selectedDiamonds.length, 1)}, minmax(16rem, 1fr))`;

  return (
    <Sheet open={drawerOpen} onOpenChange={(open) => !open && closeDrawer()}>
      <SheetContent side="bottom" hideClose className="flex h-screen flex-col p-0 lg:h-[85vh]">
        <header className="flex h-16 shrink-0 items-center border-b border-rc-border px-4 md:px-6">
          <button
            type="button"
            aria-label="Close comparison"
            className="rounded-md p-1 text-rc-muted transition-colors duration-150 hover:bg-rc-hover hover:text-rc-text"
            onClick={closeDrawer}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <h2 className="flex-1 text-center text-xl font-medium text-rc-text">
            Comparing {selectedDiamonds.length} diamond{selectedDiamonds.length === 1 ? "" : "s"}
          </h2>

          <Tooltip open={copied}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2" onClick={copyComparisonLink}>
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copy comparison link
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copied</TooltipContent>
          </Tooltip>
        </header>

        <div className="min-h-0 flex-1 overflow-auto">
          <div className="overflow-x-auto snap-x snap-mandatory lg:overflow-x-visible">
            <div className="min-w-max">
              {ROW_LABELS.map((label) => (
                <div
                  key={label}
                  className="grid border-b border-rc-border"
                  style={{ gridTemplateColumns }}
                >
                  <div className="sticky left-0 z-10 flex items-start bg-white px-4 py-4 text-sm text-neutral-700">
                    {label}
                  </div>

                  {selectedDiamonds.map((diamond) => (
                    <CompareCell
                      key={`${label}-${diamond.id}`}
                      highlighted={
                        (label === "Price" && bestPriceIds.includes(diamond.id)) ||
                        (label === "Quality score" && bestQualityIds.includes(diamond.id))
                      }
                    >
                      {renderCell(label, diamond, bestPriceIds, bestQualityIds, removeDiamond)}
                    </CompareCell>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="flex h-16 shrink-0 items-center justify-between border-t border-rc-border px-4 md:px-6">
          <Button
            variant="outline"
            className="h-10 border-neutral-200 px-6"
            onClick={() => toast("Connecting to gemologist...")}
          >
            Talk to a gemologist
          </Button>
          <Button
            className="h-10 bg-neutral-900 px-6 font-medium text-white hover:bg-neutral-800"
            onClick={() => toast(`Added ${selectedDiamonds.length} diamonds to wishlist`)}
          >
            Add all to wishlist
          </Button>
        </footer>
      </SheetContent>
    </Sheet>
  );
}

function renderCell(
  label: (typeof ROW_LABELS)[number],
  diamond: (typeof mockDiamonds)[number],
  bestPriceIds: string[],
  bestQualityIds: string[],
  onRemove: (id: string) => void,
) {
  switch (label) {
    case "Image":
      return (
        <div className="relative h-48 w-full overflow-hidden rounded-md border border-rc-border">
          <DiamondMedia
            imageUrl={getDiamondImageUrl(diamond)}
            shape={diamond.shape}
            alt={formatDiamondTitle(diamond)}
            sizes="256px"
            fillParent
          />
          <button
            type="button"
            aria-label="Remove from comparison"
            className="absolute right-2 top-2 rounded-md border border-rc-border bg-white p-1 text-neutral-600 transition-colors duration-150 hover:bg-rc-hover"
            onClick={() => onRemove(diamond.id)}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      );
    case "Title":
      return <p className="text-sm font-medium text-rc-text">{formatDiamondTitle(diamond)}</p>;
    case "Price":
      return (
        <div className="space-y-1">
          <p className="text-2xl font-medium text-rc-text">{formatCurrency(diamond.price)}</p>
          {bestPriceIds.includes(diamond.id) ? <CompareBadge>Best price</CompareBadge> : null}
        </div>
      );
    case "Comp value": {
      const savingsPercent = Math.round(((diamond.compValue - diamond.price) / diamond.compValue) * 100);
      return (
        <p className="text-sm text-neutral-700">
          <span className="text-neutral-500 line-through">Comp {formatCurrency(diamond.compValue)}</span>{" "}
          <span className="text-xs text-green-600">(save {savingsPercent}%)</span>
        </p>
      );
    }
    case "Quality score":
      return (
        <div className="space-y-1">
          <p className="text-sm text-rc-text">{diamond.quality}</p>
          {bestQualityIds.includes(diamond.id) ? <CompareBadge>Top quality</CompareBadge> : null}
        </div>
      );
    case "Shape":
      return <p className="text-sm text-rc-text">{diamond.shape}</p>;
    case "Carat":
      return <p className="text-sm text-rc-text">{diamond.carat.toFixed(1)}</p>;
    case "Color":
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="cursor-default text-sm text-rc-text">{diamond.color}</span>
          </TooltipTrigger>
          <TooltipContent>{COLOR_TOOLTIP}</TooltipContent>
        </Tooltip>
      );
    case "Clarity":
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="cursor-default text-sm text-rc-text">{diamond.clarity}</span>
          </TooltipTrigger>
          <TooltipContent>{CLARITY_TOOLTIP}</TooltipContent>
        </Tooltip>
      );
    case "Cut":
      return diamond.cut === "Rare Carat Ideal" ? (
        <Badge variant="default" className="text-xs">
          Rare Carat Ideal
        </Badge>
      ) : (
        <p className="text-sm text-rc-text">{diamond.cut}</p>
      );
    case "Certification":
      return (
        <Badge variant="outline" className="text-xs">
          {diamond.certification}
        </Badge>
      );
    case "Vendor":
      return <p className="text-sm text-rc-text">{diamond.vendor}</p>;
    default:
      return null;
  }
}
