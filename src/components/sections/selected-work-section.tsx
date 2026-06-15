import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

function getLayoutClasses(layout: string): string {
  switch (layout) {
    case "full":
      return "col-span-12";
    case "left":
      return "col-span-12 md:col-span-7";
    case "right":
      return "col-span-12 md:col-span-5 md:col-start-8";
    default:
      return "col-span-12";
  }
}

export function SelectedWorkSection() {
  return (
    <section id="work" className="section-padding">
      <div className="container-content">
        <Reveal>
          <p className="mono-eyebrow mb-4">Selected work</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-h2 text-ink-primary">
              Things I&apos;ve <em className="italic">shipped</em>.
            </h2>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-body-sm text-ink-secondary transition-colors duration-hover hover:text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
            >
              View all work
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12">
          {featuredProjects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={Math.min(i, 4) * 0.04}
              className={cn(getLayoutClasses(project.homeLayout))}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
