"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/content/projects";
import { WorkImageContainer } from "@/components/work-image";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary",
        className
      )}
    >
      <motion.div
        className="overflow-hidden rounded-image bg-subtle"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      >
        <WorkImageContainer
          src={project.cover}
          alt={`${project.name} cover image`}
          width={1600}
          height={1000}
          aspectRatio="aspect-[16/10]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      <div className="mt-4">
        <p className="mono-eyebrow mb-2">{project.category}</p>
        <h3 className="font-display text-h3 text-ink-primary">
          <span className="relative inline-block">
            {project.name}
            <span
              className="absolute bottom-0 left-0 h-px w-0 bg-ink-primary transition-all duration-orchestrated ease-editorial group-hover:w-full"
              aria-hidden="true"
            />
          </span>
        </h3>
        <p className="mt-2 text-body-sm text-ink-secondary">{project.tagline}</p>
        <p className="mt-2 text-caption text-ink-tertiary">{project.year}</p>
      </div>
    </Link>
  );
}
