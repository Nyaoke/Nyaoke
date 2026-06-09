"use client";

import { useMemo, useReducer } from "react";
import {
  ActiveFilterChip,
  CERTIFICATION_OPTIONS,
  CLARITY_OPTIONS,
  COLOR_OPTIONS,
  CUT_OPTIONS,
  CertificationOption,
  ClarityOption,
  ColorOption,
  CutOption,
  FilterState,
  LAB_OPTIONS,
  LabOption,
  MultiFilterKey,
  RangeFilterKey,
  RangeValue,
  SHAPE_OPTIONS,
  ShapeOption,
} from "@/lib/filter-types";

type SearchParamsLike = {
  get(name: string): string | null;
};

export const DEFAULT_FILTER_STATE: FilterState = {
  lab: "Natural",
  shape: "Round",
  carat: {},
  color: [],
  cut: [],
  clarity: [],
  price: {},
  certification: [],
  quickShip: false,
  deliveryByHoliday: false,
};

export type FilterAction =
  | { type: "setLab"; value: LabOption }
  | { type: "setShape"; value: ShapeOption }
  | { type: "toggleMulti"; key: MultiFilterKey; value: string }
  | { type: "setRange"; key: RangeFilterKey; value: RangeValue }
  | { type: "clearRange"; key: RangeFilterKey }
  | { type: "setQuickShip"; value: boolean }
  | { type: "setDeliveryByHoliday"; value: boolean }
  | { type: "removeChip"; chip: ActiveFilterChip }
  | { type: "reset" }
  | { type: "hydrate"; state: FilterState };

const orderedOptions: Record<MultiFilterKey, readonly string[]> = {
  color: COLOR_OPTIONS,
  cut: CUT_OPTIONS,
  clarity: CLARITY_OPTIONS,
  certification: CERTIFICATION_OPTIONS,
};

function sortByTaxonomy(key: MultiFilterKey, values: string[]) {
  const order = orderedOptions[key];
  return [...values].sort((a, b) => order.indexOf(a) - order.indexOf(b));
}

function toggleValue<T extends string>(values: T[], value: T, key: MultiFilterKey) {
  const next = values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
  return sortByTaxonomy(key, next) as T[];
}

export function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "setLab":
      return { ...state, lab: action.value };
    case "setShape":
      return { ...state, shape: action.value };
    case "toggleMulti": {
      if (action.key === "color") {
        return { ...state, color: toggleValue(state.color, action.value as ColorOption, action.key) };
      }
      if (action.key === "cut") {
        return { ...state, cut: toggleValue(state.cut, action.value as CutOption, action.key) };
      }
      if (action.key === "clarity") {
        return { ...state, clarity: toggleValue(state.clarity, action.value as ClarityOption, action.key) };
      }
      return {
        ...state,
        certification: toggleValue(state.certification, action.value as CertificationOption, action.key),
      };
    }
    case "setRange":
      return { ...state, [action.key]: cleanRange(action.value) };
    case "clearRange":
      return { ...state, [action.key]: {} };
    case "setQuickShip":
      return { ...state, quickShip: action.value };
    case "setDeliveryByHoliday":
      return { ...state, deliveryByHoliday: action.value };
    case "removeChip":
      return removeChip(state, action.chip);
    case "reset":
      return DEFAULT_FILTER_STATE;
    case "hydrate":
      return action.state;
    default:
      return state;
  }
}

function removeChip(state: FilterState, chip: ActiveFilterChip): FilterState {
  switch (chip.kind) {
    case "lab":
      return { ...state, lab: DEFAULT_FILTER_STATE.lab };
    case "shape":
      return { ...state, shape: DEFAULT_FILTER_STATE.shape };
    case "carat":
    case "price":
      return { ...state, [chip.kind]: {} };
    case "quickShip":
      return { ...state, quickShip: false };
    case "deliveryByHoliday":
      return { ...state, deliveryByHoliday: false };
    case "color":
    case "cut":
    case "clarity":
    case "certification":
      return {
        ...state,
        [chip.kind]: state[chip.kind].filter((value) => value !== chip.rawValue),
      };
    default:
      return state;
  }
}

export function useFilterState(initialParams?: SearchParamsLike) {
  const initialState = useMemo(() => parseFilterState(initialParams), [initialParams]);
  return useReducer(filterReducer, initialState);
}

export function getActiveFilterChips(state: FilterState): ActiveFilterChip[] {
  const chips: ActiveFilterChip[] = [];

  if (state.lab !== DEFAULT_FILTER_STATE.lab) {
    chips.push({ id: `lab-${state.lab}`, group: "Lab", value: state.lab, kind: "lab", rawValue: state.lab });
  }

  if (state.shape !== DEFAULT_FILTER_STATE.shape) {
    chips.push({ id: `shape-${state.shape}`, group: "Shape", value: state.shape, kind: "shape", rawValue: state.shape });
  }

  if (hasRange(state.carat)) {
    chips.push({ id: "carat-range", group: "Carat", value: formatCaratRange(state.carat), kind: "carat" });
  }

  state.color.forEach((value) => chips.push({ id: `color-${value}`, group: "Color", value, kind: "color", rawValue: value }));
  state.cut.forEach((value) => chips.push({ id: `cut-${value}`, group: "Cut", value, kind: "cut", rawValue: value }));
  state.clarity.forEach((value) => chips.push({ id: `clarity-${value}`, group: "Clarity", value, kind: "clarity", rawValue: value }));

  if (hasRange(state.price)) {
    chips.push({ id: "price-range", group: "Price", value: formatPriceRange(state.price), kind: "price" });
  }

  state.certification.forEach((value) => {
    chips.push({ id: `certification-${value}`, group: "Certification", value, kind: "certification", rawValue: value });
  });

  if (state.quickShip) {
    chips.push({ id: "quick-ship", group: "Quick ship", value: "Available", kind: "quickShip" });
  }

  if (state.deliveryByHoliday) {
    chips.push({ id: "delivery-by-holiday", group: "Delivery by Holiday", value: "Available", kind: "deliveryByHoliday" });
  }

  return chips;
}

export function hasActiveFilters(state: FilterState) {
  return getActiveFilterChips(state).length > 0;
}

export function parseFilterState(params?: SearchParamsLike): FilterState {
  if (!params) {
    return DEFAULT_FILTER_STATE;
  }

  return {
    lab: parseOne(params.get("lab"), LAB_OPTIONS, DEFAULT_FILTER_STATE.lab),
    shape: parseOne(params.get("shape"), SHAPE_OPTIONS, DEFAULT_FILTER_STATE.shape),
    carat: cleanRange({ min: parseNumber(params.get("caratMin")), max: parseNumber(params.get("caratMax")) }),
    color: parseList(params.get("color"), COLOR_OPTIONS),
    cut: parseList(params.get("cut"), CUT_OPTIONS),
    clarity: parseList(params.get("clarity"), CLARITY_OPTIONS),
    price: cleanRange({ min: parseNumber(params.get("priceMin")), max: parseNumber(params.get("priceMax")) }),
    certification: parseList(params.get("certification"), CERTIFICATION_OPTIONS),
    quickShip: params.get("quickShip") === "1",
    deliveryByHoliday: params.get("deliveryByHoliday") === "1",
  };
}

export function serializeFilterState(state: FilterState) {
  const params = new URLSearchParams();

  if (state.lab !== DEFAULT_FILTER_STATE.lab) params.set("lab", state.lab);
  if (state.shape !== DEFAULT_FILTER_STATE.shape) params.set("shape", state.shape);
  if (state.carat.min !== undefined) params.set("caratMin", String(state.carat.min));
  if (state.carat.max !== undefined) params.set("caratMax", String(state.carat.max));
  if (state.color.length > 0) params.set("color", state.color.join(","));
  if (state.cut.length > 0) params.set("cut", state.cut.join(","));
  if (state.clarity.length > 0) params.set("clarity", state.clarity.join(","));
  if (state.price.min !== undefined) params.set("priceMin", String(state.price.min));
  if (state.price.max !== undefined) params.set("priceMax", String(state.price.max));
  if (state.certification.length > 0) params.set("certification", state.certification.join(","));
  if (state.quickShip) params.set("quickShip", "1");
  if (state.deliveryByHoliday) params.set("deliveryByHoliday", "1");

  return params;
}

export function cleanRange(value: RangeValue): RangeValue {
  const min = Number.isFinite(value.min) ? value.min : undefined;
  const max = Number.isFinite(value.max) ? value.max : undefined;

  if (min !== undefined && max !== undefined && min > max) {
    return { min: max, max: min };
  }

  return { min, max };
}

export function hasRange(value: RangeValue) {
  return value.min !== undefined || value.max !== undefined;
}

export function formatCaratRange(value: RangeValue) {
  if (value.min !== undefined && value.max !== undefined) return `${value.min.toFixed(1)}-${value.max.toFixed(1)}`;
  if (value.min !== undefined) return `${value.min.toFixed(1)}+`;
  return `<${value.max?.toFixed(1)}`;
}

export function formatPriceRange(value: RangeValue) {
  if (value.min !== undefined && value.max !== undefined) return `${formatCurrency(value.min)}-${formatCurrency(value.max)}`;
  if (value.min !== undefined) return `${formatCurrency(value.min)}+`;
  return `<${formatCurrency(value.max ?? 0)}`;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function parseOne<T extends string>(value: string | null, options: readonly T[], fallback: T): T {
  return value && options.includes(value as T) ? (value as T) : fallback;
}

function parseList<T extends string>(value: string | null, options: readonly T[]): T[] {
  if (!value) return [];
  return value
    .split(",")
    .filter((item): item is T => options.includes(item as T))
    .sort((a, b) => options.indexOf(a) - options.indexOf(b));
}

function parseNumber(value: string | null) {
  if (value === null || value.trim() === "") return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}
