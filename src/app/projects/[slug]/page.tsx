import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects, getProject, getNextProject } from "@/content/projects";
import { contact } from "@/content/site";
import { ProjectCard } from "@/components/project-card";
import { LogoMarquee } from "@/components/logo-marquee";
import { Reveal } from "@/components/reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} · Ted Nyaoke Portfolio`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);
  const hasCaseStudy = Boolean(project.heroHeading);

  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="container-page">
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight md:text-7xl">
              {project.heroHeading ?? project.name}
            </h1>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-y border-border py-6 text-sm">
              {project.client && (
                <div>
                  <p className="text-ink-faint">Client</p>
                  <p className="mt-1 font-medium text-ink">{project.client}</p>
                </div>
              )}
              {project.year && (
                <div>
                  <p className="text-ink-faint">Year</p>
                  <p className="mt-1 font-medium text-ink">{project.year}</p>
                </div>
              )}
              {project.scope && (
                <div>
                  <p className="text-ink-faint">Scope of Work</p>
                  <p className="mt-1 font-medium text-ink">{project.scope}</p>
                </div>
              )}
              {!project.client && (
                <div>
                  <p className="text-ink-faint">Project</p>
                  <p className="mt-1 font-medium text-ink">{project.subtitle}</p>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[#0a2342] to-[#12508a]" />
          </Reveal>

          {project.intro && (
            <Reveal>
              <p className="mt-12 max-w-3xl text-lg leading-relaxed text-ink-muted">
                {project.intro}
              </p>
            </Reveal>
          )}

          {hasCaseStudy && project.sections ? (
            <div className="mt-16 space-y-16">
              {project.sections.map((section) => (
                <Reveal key={section.heading ?? section.body.slice(0, 24)}>
                  <div className="max-w-3xl">
                    {section.heading && (
                      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        {section.heading}
                      </h2>
                    )}
                    <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                      {section.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <p className="mt-12 max-w-3xl text-lg leading-relaxed text-ink-muted">
                {project.subtitle}. Case study content coming soon.
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              More Projects
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
            <Reveal>
              <ProjectCard project={next} />
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-12">
              <Link href="/projects" className="btn-outline">
                View all my projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pt-0">
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
              <ArrowUpRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
