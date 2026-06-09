import { Diamond } from "@/lib/filter-types";

export const MAX_COMPARE_COUNT = 4;

export const COMPARE_PARAM = "compare";

export type ComparisonState = {
  selectedIds: string[];
  drawerOpen: boolean;
};

export type ComparisonAction =
  | { type: "add"; id: string }
  | { type: "remove"; id: string }
  | { type: "clear" }
  | { type: "hydrate"; ids: string[] }
  | { type: "setDrawerOpen"; open: boolean };

export type ComparisonDiamond = Diamond & {
  vendor: string;
  imageUrl?: string;
};

export type ComparisonHighlights = {
  bestPrice: string;
  bestQuality: string;
  bestSavings: string;
  bestCut: string;
};

export type HighlightDimension = keyof ComparisonHighlights;
