import { Suspense } from "react";
import { MainNav } from "@/components/main-nav";
import { PageHeading } from "@/components/page-heading";
import { PromoStrip } from "@/components/promo-strip";
import { StepIndicator } from "@/components/step-indicator";
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
      <PromoStrip />
      <MainNav />
      <StepIndicator />
      <PageHeading shape="Round" />
    </div>
  );
}
