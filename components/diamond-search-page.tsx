"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { ActiveFilterChipRow } from "@/components/active-filter-chip-row";
import { DiamondCard } from "@/components/diamond-card";
import { FilterSidebar } from "@/components/filter-sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { applyFilters } from "@/lib/apply-filters";
import { ActiveFilterChip } from "@/lib/filter-types";
import {
  getActiveFilterChips,
  serializeFilterState,
  useFilterState,
} from "@/lib/filter-state";
import { mockDiamonds } from "@/lib/mock-diamonds";

export function DiamondSearchPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filterState, dispatch] = useFilterState(searchParams);

  const activeChips = useMemo(() => getActiveFilterChips(filterState), [filterState]);
  const filteredDiamonds = useMemo(() => applyFilters(mockDiamonds, filterState), [filterState]);

  useEffect(() => {
    const nextParams = serializeFilterState(filterState);
    const nextQuery = nextParams.toString();
    const currentQuery = searchParams.toString();

    if (nextQuery === currentQuery) {
      return;
    }

    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, { scroll: false });
  }, [filterState, pathname, router, searchParams]);

  const removeChip = (chip: ActiveFilterChip) => {
    dispatch({ type: "removeChip", chip });
  };

  const resetFilters = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="min-h-screen bg-white text-rc-text">
      <header className="border-b border-rc-border bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
          <div className="text-sm font-medium tracking-tight text-rc-text">RARE CARAT</div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-2xl font-medium tracking-tight text-rc-text">Search for Natural Diamonds</h1>
        <p className="mt-2 text-sm text-rc-muted">GIA-graded diamonds with full 4Cs transparency</p>
      </section>

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
            <p className="text-sm text-rc-muted">{filteredDiamonds.length} results</p>
          </div>

          <ActiveFilterChipRow chips={activeChips} onRemove={removeChip} onReset={resetFilters} />

          <div className="mb-4 hidden items-center justify-between md:flex">
            <p className="text-sm text-rc-muted">{filteredDiamonds.length} diamonds</p>
            <Button variant="yellow" size="sm">
              Save search
            </Button>
          </div>

          {filteredDiamonds.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDiamonds.slice(0, 12).map((diamond) => (
                <DiamondCard key={diamond.id} diamond={diamond} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-64 items-center justify-center border border-rc-border bg-white p-8 text-center">
              <div>
                <h2 className="text-base font-medium text-rc-text">No diamonds match these filters</h2>
                <p className="mt-2 text-sm text-rc-muted">Remove a filter to broaden the result set.</p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
