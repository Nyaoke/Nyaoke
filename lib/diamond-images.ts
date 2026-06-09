import { ShapeOption } from "@/lib/filter-types";
import { ComparisonDiamond } from "@/lib/comparison-types";

const SHAPE_IMAGE_POOL: Record<ShapeOption, readonly string[]> = {
  Round: ["/diamonds/round-1.jpg", "/diamonds/round-2.jpg", "/diamonds/round-3.jpg"],
  Oval: ["/diamonds/oval-1.jpg"],
  Cushion: ["/diamonds/cushion-1.jpg"],
  Emerald: ["/diamonds/emerald-1.jpg"],
  Princess: ["/diamonds/princess-1.jpg"],
  Radiant: ["/diamonds/radiant-1.jpg", "/diamonds/radiant-2.jpg"],
  Pear: ["/diamonds/pear-1.jpg"],
  Marquise: ["/diamonds/marquise-1.jpg"],
  Asscher: ["/diamonds/asscher-1.jpg"],
  Heart: ["/diamonds/heart-1.jpg"],
};

const DIAMOND_IMAGE_OVERRIDES: Record<string, string> = {
  "147841971": "/diamonds/round-1.jpg",
  "139342592": "/diamonds/round-2.jpg",
  "149233704": "/diamonds/marquise-1.jpg",
};

export function getDiamondImageUrl(diamond: Pick<ComparisonDiamond, "id" | "shape" | "imageUrl">): string | null {
  if (diamond.imageUrl) {
    return diamond.imageUrl;
  }

  if (DIAMOND_IMAGE_OVERRIDES[diamond.id]) {
    return DIAMOND_IMAGE_OVERRIDES[diamond.id];
  }

  const pool = SHAPE_IMAGE_POOL[diamond.shape];
  if (!pool || pool.length === 0) {
    return null;
  }

  const numericSeed = Number(diamond.id.slice(-2)) || 0;
  return pool[numericSeed % pool.length];
}
