import { Suspense } from "react";
import { Toaster } from "sonner";
import { CompareDock } from "@/components/compare-dock";
import { CompareDrawer } from "@/components/compare-drawer";
import { ComparePageChrome } from "@/components/compare-page-chrome";
import { MainNav } from "@/components/main-nav";
import { PageHeading } from "@/components/page-heading";
import { PromoStrip } from "@/components/promo-strip";
import { StepIndicator } from "@/components/step-indicator";
import { DiamondSearchPage } from "@/components/diamond-search-page";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ComparisonProvider } from "@/lib/comparison-state";

export default function Page() {
  return (
    <TooltipProvider delayDuration={150}>
      <Suspense fallback={<DiamondSearchFallback />}>
        <ComparisonProvider>
          <ComparePageChrome>
            <DiamondSearchPage />
          </ComparePageChrome>
          <CompareDock />
          <CompareDrawer />
        </ComparisonProvider>
      </Suspense>
      <Toaster position="top-center" richColors />
    </TooltipProvider>
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
