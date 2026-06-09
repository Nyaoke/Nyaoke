"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { ActiveFilterChipRow } from "@/components/active-filter-chip-row";
import { CaratQuickPicks } from "@/components/carat-quick-picks";
import { DiamondGrid } from "@/components/diamond-grid";
import { FilterSidebar } from "@/components/filter-sidebar";
import { MainNav } from "@/components/main-nav";
import { PageHeading } from "@/components/page-heading";
import { PromoStrip } from "@/components/promo-strip";
import { ResultsHeader } from "@/components/results-header";
import { SiteFooter } from "@/components/site-footer";
import { StepIndicator } from "@/components/step-indicator";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { applyFilters } from "@/lib/apply-filters";
import { ActiveFilterChip } from "@/lib/filter-types";
import { canonicalQueryString, parseComparisonIds, queriesEquivalent, setComparisonInParams } from "@/lib/comparison-url";
import { getActiveFilterChips, serializeFilterState, useFilterState } from "@/lib/filter-state";
import { mockDiamonds } from "@/lib/mock-diamonds";

export function DiamondSearchPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filterState, dispatch] = useFilterState(searchParams);
  const searchParamsRef = useRef(searchParams);
  searchParamsRef.current = searchParams;

  const activeChips = useMemo(() => getActiveFilterChips(filterState), [filterState]);
  const filteredDiamonds = useMemo(() => applyFilters(mockDiamonds, filterState), [filterState]);

  useEffect(() => {
    const currentParams = searchParamsRef.current;
    const nextParams = serializeFilterState(filterState);
    setComparisonInParams(nextParams, parseComparisonIds(currentParams));
    const nextQuery = canonicalQueryString(nextParams);
    const currentQuery = canonicalQueryString(currentParams.toString());

    if (queriesEquivalent(nextQuery, currentQuery)) {
      return;
    }

    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, { scroll: false });
  }, [filterState, pathname, router]);

  const removeChip = (chip: ActiveFilterChip) => {
    dispatch({ type: "removeChip", chip });
  };

  const resetFilters = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="min-h-screen bg-white text-rc-text">
      <PromoStrip />
      <MainNav />
      <StepIndicator />
      <PageHeading shape={filterState.shape} />

      <main className="mx-auto flex max-w-7xl gap-8 px-6 pb-12">
        <div className="hidden w-72 shrink-0 border-r border-rc-border pr-6 md:block">
          <FilterSidebar state={filterState} dispatch={dispatch} />
        </div>

        <section className="min-w-0 flex-1">
          <div className="mb-5 flex items-center justify-between md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <FilterSidebar state={filterState} dispatch={dispatch} />
              </SheetContent>
            </Sheet>
          </div>

          <ResultsHeader />
          <CaratQuickPicks
            value={filterState.carat}
            onChange={(value) => dispatch({ type: "setRange", key: "carat", value })}
          />
          <ActiveFilterChipRow chips={activeChips} onRemove={removeChip} onReset={resetFilters} />
          <DiamondGrid diamonds={filteredDiamonds} />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
