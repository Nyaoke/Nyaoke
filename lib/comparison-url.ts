import { COMPARE_PARAM, MAX_COMPARE_COUNT } from "@/lib/comparison-types";
import { mockDiamonds } from "@/lib/mock-diamonds";

type SearchParamsLike = {
  get(name: string): string | null;
  toString(): string;
};

const validDiamondIds = new Set(mockDiamonds.map((diamond) => diamond.id));

export function canonicalQueryString(params: URLSearchParams | string): string {
  const normalized = typeof params === "string" ? new URLSearchParams(params) : params;
  const sorted = [...normalized.entries()].sort(([left], [right]) => left.localeCompare(right));
  return new URLSearchParams(sorted).toString();
}

export function queriesEquivalent(left: string, right: string): boolean {
  if (left === right) {
    return true;
  }
  return canonicalQueryString(left) === canonicalQueryString(right);
}

export function parseComparisonIds(params?: SearchParamsLike | null): string[] {
  if (!params) {
    return [];
  }

  const value = params.get(COMPARE_PARAM);
  if (!value) {
    return [];
  }

  const seen = new Set<string>();
  const ids: string[] = [];

  for (const rawId of value.split(",")) {
    const id = rawId.trim();
    if (!id || seen.has(id) || !validDiamondIds.has(id)) {
      continue;
    }
    seen.add(id);
    ids.push(id);
    if (ids.length >= MAX_COMPARE_COUNT) {
      break;
    }
  }

  return ids;
}

export function setComparisonInParams(params: URLSearchParams, ids: string[]): void {
  if (ids.length === 0) {
    params.delete(COMPARE_PARAM);
    return;
  }

  params.set(COMPARE_PARAM, ids.join(","));
}

export function buildUrlWithComparison(pathname: string, currentParams: SearchParamsLike, ids: string[]): string {
  const params = new URLSearchParams(currentParams.toString());
  setComparisonInParams(params, ids);
  const query = canonicalQueryString(params);
  return query ? `${pathname}?${query}` : pathname;
}

export function comparisonIdsMatchUrl(ids: string[], params: SearchParamsLike): boolean {
  const urlIds = parseComparisonIds(params);
  return ids.length === urlIds.length && ids.every((id, index) => id === urlIds[index]);
}
