"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

const GRADIENTS: Record<string, string> = {
  "ola-energy": "from-[#0a2342] to-[#12508a]",
  "walker-town": "from-[#b5471f] to-[#e0852f]",
  "pulse-sentiment": "from-[#1f1147] to-[#5b2a9d]",
  "stanbic-bank---ssd": "from-[#0a3d2e] to-[#13795a]",
  dunkit: "from-[#2a1f0a] to-[#8a6a13]",
  mediacommand: "from-[#101317] to-[#2b3340]",
  "airtel-money": "from-[#7a0d0d] to-[#d61f1f]",
  "honda-kenya": "from-[#5a0d0d] to-[#c01717]",
  neongage: "from-[#0a1f1a] to-[#119d7a]",
  "crown-paints": "from-[#1a2a5a] to-[#2f4fc0]",
  "purpose-to-impact": "from-[#3a1f0a] to-[#a06a2f]",
  "kijani-flow": "from-[#0a3d1f] to-[#2f9d5a]",
};

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group block", className)}
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-subtle">
        <div
          className={cn(
            "flex aspect-[16/11] items-end bg-gradient-to-br p-6 transition-transform duration-500 ease-out group-hover:scale-[1.03]",
            GRADIENTS[project.slug] ?? "from-[#1a1a1a] to-[#3a3a3a]"
          )}
        >
          <span className="text-2xl font-semibold tracking-tight text-white/90">
            {project.name}
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-ink">
            {project.name}
          </h3>
          <p className="mt-1 text-ink-muted">{project.subtitle}</p>
        </div>
        <span className="inline-flex items-center gap-1 whitespace-nowrap pt-1 text-[15px] font-medium text-ink">
          View Project
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
