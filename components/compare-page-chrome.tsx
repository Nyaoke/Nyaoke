"use client";

import type { ReactNode } from "react";
import { useComparison } from "@/lib/comparison-state";
import { cn } from "@/lib/utils";

export function ComparePageChrome({ children }: { children: ReactNode }) {
  const { selectedIds } = useComparison();

  return <div className={cn(selectedIds.length > 0 && "pb-14 md:pb-16")}>{children}</div>;
}
