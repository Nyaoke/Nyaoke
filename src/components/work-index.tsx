"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { projects, type ProjectCategory } from "@/content/projects";
import { WorkImageContainer } from "@/components/work-image";
import { cn } from "@/lib/utils";

const filters: Array<ProjectCategory | "All"> = [
  "All",
  "Product",
  "Web",
  "Independent",
  "Mobile",
];

const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

export function WorkIndex() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">(
    "All"
  );

  const filtered =
    activeFilter === "All"
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === activeFilter);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-pill border px-4 py-2 text-body-sm transition-colors duration-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary",
              activeFilter === filter
                ? "border-ink-primary bg-ink-primary text-canvas"
                : "border-default text-ink-secondary hover:border-strong hover:text-ink-primary"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <ul className="mt-12 divide-y divide-border">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group flex items-center gap-6 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary md:gap-8"
              >
                <span className="hidden w-8 font-mono text-mono-label text-ink-quaternary md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-12 text-caption text-ink-tertiary md:w-16">
                  {project.year}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-h3 text-ink-primary transition-colors duration-hover group-hover:text-ink-secondary">
                    {project.name}
                  </h2>
                  <p className="mt-1 truncate text-body-sm text-ink-secondary">
                    {project.tagline}
                  </p>
                </div>
                <span className="hidden rounded-input border border-default px-3 py-1 font-mono text-mono-label text-ink-tertiary md:block">
                  {project.category}
                </span>
                <div className="relative h-[70px] w-20 shrink-0 overflow-hidden rounded-input bg-subtle transition-all duration-hover group-hover:h-[140px] group-hover:w-[200px]">
                  <WorkImageContainer
                    src={project.cover}
                    alt={`${project.name} thumbnail`}
                    width={200}
                    height={140}
                    className="h-full w-full object-cover"
                    sizes="200px"
                  />
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
}
