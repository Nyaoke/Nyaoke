import { Diamond, FilterState } from "@/lib/filter-types";

export function applyFilters(diamonds: Diamond[], filters: FilterState) {
  return diamonds.filter((diamond) => {
    if (diamond.lab !== filters.lab) {
      return false;
    }

    if (diamond.shape !== filters.shape) {
      return false;
    }

    if (filters.carat.min !== undefined && diamond.carat < filters.carat.min) {
      return false;
    }

    if (filters.carat.max !== undefined && diamond.carat > filters.carat.max) {
      return false;
    }

    if (filters.color.length > 0 && !filters.color.includes(diamond.color)) {
      return false;
    }

    if (filters.cut.length > 0 && !filters.cut.includes(diamond.cut)) {
      return false;
    }

    if (filters.clarity.length > 0 && !filters.clarity.includes(diamond.clarity)) {
      return false;
    }

    if (filters.price.min !== undefined && diamond.price < filters.price.min) {
      return false;
    }

    if (filters.price.max !== undefined && diamond.price > filters.price.max) {
      return false;
    }

    if (filters.certification.length > 0 && !filters.certification.includes(diamond.certification)) {
      return false;
    }

    if (filters.quickShip && !diamond.quickShip) {
      return false;
    }

    return true;
  });
}
