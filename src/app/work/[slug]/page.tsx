import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  projects,
  getProject,
  getNextProject,
} from "@/content/projects";
import { CaseStudyContent } from "@/components/case-study-content";
import { WorkImageContainer } from "@/components/work-image";
import { Reveal } from "@/components/reveal";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} · Ted Nyaoke`,
      description: project.tagline,
      images: [{ url: project.cover, width: 1600, height: 1000 }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = getNextProject(slug);

  return (
    <>
      <CaseStudyContent project={project} />

      {nextProject && (
        <section className="border-t border-default">
          <Reveal>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
            >
              <div className="relative">
                <WorkImageContainer
                  src={nextProject.hero}
                  alt={`Next project: ${nextProject.name}`}
                  width={1920}
                  height={600}
                  aspectRatio="aspect-[32/10]"
                  sizes="100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink-primary/40">
                  <div className="text-center">
                    <p className="mono-eyebrow text-canvas/80">Next project</p>
                    <p className="mt-2 font-display text-h2 text-canvas">
                      {nextProject.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </section>
      )}
    </>
  );
}
