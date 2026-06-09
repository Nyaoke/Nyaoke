import { Diamond } from "@/lib/filter-types";
import { formatCurrency } from "@/lib/filter-state";
import { formatDiamondTitle } from "@/lib/mock-diamonds";

type DiamondCardProps = {
  diamond: Diamond;
};

export function DiamondCard({ diamond }: DiamondCardProps) {
  return (
    <article className="group border border-rc-border bg-white transition-colors duration-150 hover:border-neutral-300">
      <div className="aspect-square bg-neutral-100" />
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-rc-muted">{diamond.quality}</span>
          {diamond.quickShip ? <span className="text-xs text-rc-muted">Quick ship</span> : null}
        </div>
        <h2 className="min-h-10 text-sm font-medium leading-5 text-rc-text">{formatDiamondTitle(diamond)}</h2>
        <div>
          <p className="text-base font-medium text-rc-text">{formatCurrency(diamond.price)}</p>
          <p className="text-xs text-rc-muted">
            Comp. value{" "}
            <span className="line-through">{formatCurrency(diamond.compValue)}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
