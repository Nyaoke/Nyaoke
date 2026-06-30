import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { contact } from "@/content/site";
import { ProjectCard } from "@/components/project-card";
import { LogoMarquee } from "@/components/logo-marquee";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Work · Ted Nyaoke Portfolio",
  description: "My most recent work. No fluff, just hard-hitting design projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="container-page">
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              My most recent work
            </h1>
            <p className="mt-4 text-lg text-ink-muted">
              No fluff, just hard-hitting design projects.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <p className="text-center text-sm font-medium uppercase tracking-wide text-ink-faint">
            Trusted by many
          </p>
          <p className="mt-3 text-center text-ink-muted">99+ Happy clients</p>
        </div>
        <div className="mt-8">
          <LogoMarquee />
        </div>
        <div className="container-page mt-20">
          <div className="flex flex-col items-center gap-6 rounded-[28px] bg-ink p-10 text-center text-page md:p-16">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Like what you see? Book a free discovery call.
            </h2>
            <Link
              href={contact.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-page px-6 text-[15px] font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Schedule Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
