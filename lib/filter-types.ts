export const LAB_OPTIONS = ["Natural", "Lab"] as const;
export const SHAPE_OPTIONS = [
  "Round",
  "Oval",
  "Cushion",
  "Emerald",
  "Princess",
  "Radiant",
  "Pear",
  "Marquise",
  "Asscher",
  "Heart",
] as const;
export const COLOR_OPTIONS = ["D", "E", "F", "G", "H", "I", "J", "K"] as const;
export const CUT_OPTIONS = ["Good", "Very Good", "Excellent", "Rare Carat Ideal"] as const;
export const CLARITY_OPTIONS = ["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2"] as const;
export const CERTIFICATION_OPTIONS = ["GIA", "IGI", "GCAL"] as const;

export type LabOption = (typeof LAB_OPTIONS)[number];
export type ShapeOption = (typeof SHAPE_OPTIONS)[number];
export type ColorOption = (typeof COLOR_OPTIONS)[number];
export type CutOption = (typeof CUT_OPTIONS)[number];
export type ClarityOption = (typeof CLARITY_OPTIONS)[number];
export type CertificationOption = (typeof CERTIFICATION_OPTIONS)[number];

export type MultiFilterKey = "color" | "cut" | "clarity" | "certification";
export type RangeFilterKey = "carat" | "price";

export type RangeValue = {
  min?: number;
  max?: number;
};

export type FilterState = {
  lab: LabOption;
  shape: ShapeOption;
  carat: RangeValue;
  color: ColorOption[];
  cut: CutOption[];
  clarity: ClarityOption[];
  price: RangeValue;
  certification: CertificationOption[];
  quickShip: boolean;
};

export type Diamond = {
  id: string;
  lab: LabOption;
  carat: number;
  color: ColorOption;
  clarity: ClarityOption;
  cut: CutOption;
  shape: ShapeOption;
  price: number;
  compValue: number;
  quality: string;
  certification: CertificationOption;
  quickShip: boolean;
};

export type ActiveFilterChip = {
  id: string;
  group: string;
  value: string;
  kind: "lab" | "shape" | MultiFilterKey | RangeFilterKey | "quickShip";
  rawValue?: string;
};
