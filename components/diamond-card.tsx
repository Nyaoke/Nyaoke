import { CompareCheckbox } from "@/components/compare-checkbox";
import { DiamondMedia } from "@/components/diamond-media";
import { Diamond } from "@/lib/filter-types";
import { formatCurrency } from "@/lib/filter-state";
import { getDiamondImageUrl } from "@/lib/diamond-images";
import { formatDiamondTitle } from "@/lib/mock-diamonds";

type DiamondCardProps = {
  diamond: Diamond;
};

export function DiamondCard({ diamond }: DiamondCardProps) {
  const imageUrl = getDiamondImageUrl(diamond);

  return (
    <article className="relative border border-rc-border bg-white transition-colors duration-150 hover:border-neutral-300">
      <div className="relative aspect-square border-b border-rc-border bg-neutral-100">
        <DiamondMedia
          imageUrl={imageUrl}
          shape={diamond.shape}
          alt={formatDiamondTitle(diamond)}
        />
        <CompareCheckbox diamondId={diamond.id} />
      </div>
      <div className="space-y-2 p-4 pb-11">
        <h2 className="text-sm font-medium leading-5 text-rc-text">{formatDiamondTitle(diamond)}</h2>
        <p className="text-xs text-rc-muted">
          {diamond.carat.toFixed(2)} Carat · {diamond.color} · {diamond.clarity}
        </p>
        <p className="text-xs text-rc-muted">{diamond.cut} Cut</p>
        <p className="pt-1 text-base font-medium text-rc-text">{formatCurrency(diamond.price)}</p>
        <p className="text-xs text-rc-muted">
          Comp. value: <span className="line-through">{formatCurrency(diamond.compValue)}</span>
        </p>
      </div>
      <div className="absolute bottom-4 right-4 rounded-md border border-rc-border bg-white px-2 py-1 text-xs text-rc-muted">
        {diamond.quality} quality
      </div>
    </article>
  );
}
