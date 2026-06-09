"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ComparisonProvider, useComparison } from "@/lib/comparison-state";
import { parseComparisonIds } from "@/lib/comparison-url";
import { mockDiamonds } from "@/lib/mock-diamonds";

function CompareTestPanel() {
  const searchParams = useSearchParams();
  const { selectedIds, toggleDiamond, removeDiamond, clearComparison } = useComparison();

  useEffect(() => {
    console.log("[compare-test] selectedIds", selectedIds);
    console.log("[compare-test] url compare param", parseComparisonIds(searchParams));
    console.log("[compare-test] full query", searchParams.toString());
  }, [searchParams, selectedIds]);

  return (
    <div className="mx-auto max-w-xl space-y-4 p-8 font-mono text-sm">
      <h1 className="text-lg font-medium">Comparison state test</h1>
      <p>Selected: {selectedIds.join(", ") || "(none)"}</p>
      <p>URL compare: {parseComparisonIds(searchParams).join(", ") || "(none)"}</p>
      <div className="flex flex-wrap gap-2">
        {mockDiamonds.slice(0, 6).map((diamond) => (
          <button
            key={diamond.id}
            type="button"
            className="rounded border px-2 py-1"
            onClick={() => toggleDiamond(diamond.id)}
          >
            {selectedIds.includes(diamond.id) ? "✓" : "+"} {diamond.id}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button type="button" className="rounded border px-2 py-1" onClick={() => removeDiamond(selectedIds[0] ?? "")}>
          Remove first
        </button>
        <button type="button" className="rounded border px-2 py-1" onClick={clearComparison}>
          Clear
        </button>
      </div>
      <p className="text-rc-muted">Open devtools console to watch state logs. Toggle 5 diamonds to verify cap toast.</p>
    </div>
  );
}

export default function CompareTestPage() {
  return (
    <ComparisonProvider>
      <CompareTestPanel />
    </ComparisonProvider>
  );
}
