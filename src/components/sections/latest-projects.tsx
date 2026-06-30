import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export function LatestProjects() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Latest Projects
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-14 flex justify-center">
            <Link href="/projects" className="btn-outline">
              View more projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
