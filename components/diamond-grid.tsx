import { DiamondCard } from "@/components/diamond-card";
import { Diamond } from "@/lib/filter-types";

type DiamondGridProps = {
  diamonds: Diamond[];
};

export function DiamondGrid({ diamonds }: DiamondGridProps) {
  if (diamonds.length === 0) {
    return (
      <div className="flex min-h-64 items-center justify-center border border-rc-border bg-white p-8 text-center">
        <div>
          <h2 className="text-base font-medium text-rc-text">No diamonds match these filters</h2>
          <p className="mt-2 text-sm text-rc-muted">Remove a filter to broaden the result set.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {diamonds.slice(0, 12).map((diamond) => (
        <DiamondCard key={diamond.id} diamond={diamond} />
      ))}
    </div>
  );
}
