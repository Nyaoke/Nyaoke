import { CutOption, Diamond } from "@/lib/filter-types";
import { ComparisonHighlights, HighlightDimension } from "@/lib/comparison-types";

const CUT_TIER: Record<CutOption, number> = {
  Good: 1,
  "Very Good": 2,
  Excellent: 3,
  "Rare Carat Ideal": 4,
};

export function parseQualityScore(quality: string): number {
  const match = quality.match(/^(\d+)\/18$/);
  return match ? Number(match[1]) : 0;
}

export function savingsRatio(diamond: Diamond): number {
  if (diamond.compValue <= 0) {
    return 0;
  }
  return (diamond.compValue - diamond.price) / diamond.compValue;
}

export function getComparisonHighlights(diamonds: Diamond[]): ComparisonHighlights {
  if (diamonds.length === 0) {
    return { bestPrice: "", bestQuality: "", bestSavings: "", bestCut: "" };
  }

  let bestPrice = diamonds[0].id;
  let lowestPrice = diamonds[0].price;

  let bestQuality = diamonds[0].id;
  let highestQuality = parseQualityScore(diamonds[0].quality);

  let bestSavings = diamonds[0].id;
  let highestSavings = savingsRatio(diamonds[0]);

  let bestCut = diamonds[0].id;
  let highestCut = CUT_TIER[diamonds[0].cut];

  for (const diamond of diamonds.slice(1)) {
    if (diamond.price < lowestPrice) {
      lowestPrice = diamond.price;
      bestPrice = diamond.id;
    }

    const qualityScore = parseQualityScore(diamond.quality);
    if (qualityScore > highestQuality) {
      highestQuality = qualityScore;
      bestQuality = diamond.id;
    }

    const savings = savingsRatio(diamond);
    if (savings > highestSavings) {
      highestSavings = savings;
      bestSavings = diamond.id;
    }

    const cutTier = CUT_TIER[diamond.cut];
    if (cutTier > highestCut) {
      highestCut = cutTier;
      bestCut = diamond.id;
    }
  }

  return { bestPrice, bestQuality, bestSavings, bestCut };
}

export function getHighlightedIds(diamonds: Diamond[], dimension: HighlightDimension, highlights: ComparisonHighlights): string[] {
  if (diamonds.length === 0) {
    return [];
  }

  switch (dimension) {
    case "bestPrice": {
      const minPrice = Math.min(...diamonds.map((diamond) => diamond.price));
      return diamonds.filter((diamond) => diamond.price === minPrice).map((diamond) => diamond.id);
    }
    case "bestQuality": {
      const maxQuality = Math.max(...diamonds.map((diamond) => parseQualityScore(diamond.quality)));
      return diamonds
        .filter((diamond) => parseQualityScore(diamond.quality) === maxQuality)
        .map((diamond) => diamond.id);
    }
    case "bestSavings": {
      const maxSavings = Math.max(...diamonds.map((diamond) => savingsRatio(diamond)));
      return diamonds.filter((diamond) => savingsRatio(diamond) === maxSavings).map((diamond) => diamond.id);
    }
    case "bestCut": {
      const maxCut = Math.max(...diamonds.map((diamond) => CUT_TIER[diamond.cut]));
      return diamonds.filter((diamond) => CUT_TIER[diamond.cut] === maxCut).map((diamond) => diamond.id);
    }
    default:
      return highlights[dimension] ? [highlights[dimension]] : [];
  }
}

export function formatSavingsLabel(diamond: Diamond): string {
  const percent = Math.round(savingsRatio(diamond) * 100);
  return `Comp $${diamond.compValue.toLocaleString("en-US")} (save ${percent}%)`;
}
