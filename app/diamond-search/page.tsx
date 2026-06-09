import { Suspense } from "react";
import { DiamondSearchPage } from "@/components/diamond-search-page";

export default function Page() {
  return (
    <Suspense fallback={<DiamondSearchFallback />}>
      <DiamondSearchPage />
    </Suspense>
  );
}

function DiamondSearchFallback() {
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
    </div>
  );
}
