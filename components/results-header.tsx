"use client";

import { ChevronDown } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const sortOptions = ["Sweet Spot", "Top Quality", "Budget Friendly", "Largest", "Lowest price", "Highest price"];

export function ResultsHeader() {
  return (
    <div className="mb-5 border-b border-rc-border pb-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-medium text-rc-text">50,671 results found</p>
          <p className="mt-2 max-w-2xl text-sm text-rc-muted">
            We&apos;re using unbiased artificial intelligence to compare your diamonds to a million others{" "}
            <a href="#" className="text-rc-text underline-offset-4 hover:underline">
              Track this search
            </a>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ToggleGroup type="single" defaultValue="Visual" size="sm" aria-label="View type">
            <ToggleGroupItem value="Visual">Visual</ToggleGroupItem>
            <ToggleGroupItem value="List">List</ToggleGroupItem>
            <ToggleGroupItem value="Best Value">Best Value</ToggleGroupItem>
          </ToggleGroup>
          <label className="relative">
            <span className="sr-only">Sort diamonds</span>
            <select
              defaultValue="Sweet Spot"
              className="h-8 appearance-none rounded-md border border-rc-border bg-white pl-3 pr-8 text-xs text-rc-text transition-colors duration-150 hover:bg-rc-hover focus:border-rc-text focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-rc-muted" />
          </label>
        </div>
      </div>
    </div>
  );
}
