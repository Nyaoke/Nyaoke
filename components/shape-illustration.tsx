import type { ReactNode } from "react";
import { ShapeOption } from "@/lib/filter-types";
import { cn } from "@/lib/utils";

type ShapeIllustrationProps = {
  shape: ShapeOption;
  className?: string;
};

export function ShapeIllustration({ shape, className }: ShapeIllustrationProps) {
  return (
    <svg viewBox="0 0 80 80" className={cn("h-16 w-16 text-neutral-400", className)} aria-hidden="true">
      {shapePaths[shape]}
    </svg>
  );
}

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
};

const shapePaths: Record<ShapeOption, ReactNode> = {
  Round: <circle cx="40" cy="40" r="24" {...strokeProps} />,
  Oval: <ellipse cx="40" cy="40" rx="18" ry="26" {...strokeProps} />,
  Cushion: <rect x="18" y="18" width="44" height="44" rx="10" {...strokeProps} />,
  Emerald: <rect x="22" y="20" width="36" height="40" {...strokeProps} />,
  Princess: <rect x="22" y="22" width="36" height="36" transform="rotate(45 40 40)" {...strokeProps} />,
  Radiant: <rect x="20" y="20" width="40" height="40" rx="4" {...strokeProps} />,
  Pear: <path d="M40 14 C52 24 58 40 40 66 C22 40 28 24 40 14 Z" {...strokeProps} />,
  Marquise: <path d="M16 40 C28 18 52 18 64 40 C52 62 28 62 16 40 Z" {...strokeProps} />,
  Asscher: <rect x="22" y="22" width="36" height="36" rx="2" {...strokeProps} />,
  Heart: (
    <path
      d="M40 62 C24 48 16 38 16 30 C16 22 22 16 30 16 C34 16 38 18 40 22 C42 18 46 16 50 16 C58 16 64 22 64 30 C64 38 56 48 40 62 Z"
      {...strokeProps}
    />
  ),
};
