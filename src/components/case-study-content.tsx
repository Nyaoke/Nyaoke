"use client";

import { useState } from "react";
import type { Project } from "@/content/projects";
import { WorkImageContainer } from "@/components/work-image";
import { Lightbox } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

interface CaseStudyContentProps {
  project: Project;
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <article>
      <header className="container-content section-padding pb-0">
        <Reveal>
          <p className="mono-eyebrow mb-4">
            {project.category} · {project.year}
          </p>
          <h1 className="font-display text-h1 text-ink-primary">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-ink-secondary">
            {project.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.04}>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-y border-default py-8 md:grid-cols-4">
            <div>
              <dt className="mono-eyebrow mb-2">Role</dt>
              <dd className="text-body-sm text-ink-secondary">{project.role}</dd>
            </div>
            <div>
              <dt className="mono-eyebrow mb-2">Team</dt>
              <dd className="text-body-sm text-ink-secondary">{project.team}</dd>
            </div>
            <div>
              <dt className="mono-eyebrow mb-2">Timeline</dt>
              <dd className="text-body-sm text-ink-secondary">
                {project.timeline}
              </dd>
            </div>
            <div>
              <dt className="mono-eyebrow mb-2">Stack</dt>
              <dd className="text-body-sm text-ink-secondary">
                {project.stack.join(", ")}
              </dd>
            </div>
          </dl>
        </Reveal>
      </header>

      <Reveal className="container-wide mt-12">
        <WorkImageContainer
          src={project.hero}
          alt={`${project.name} hero image`}
          width={1920}
          height={1080}
          aspectRatio="aspect-[16/9]"
          containerClassName="rounded-image"
          sizes="100vw"
          priority
        />
      </Reveal>

      <section className="container-content section-padding">
        <Reveal>
          <h2 className="font-display text-h2 text-ink-primary">The brief.</h2>
          <div className="mt-6 max-w-2xl space-y-4">
            {project.context.map((paragraph, i) => (
              <p key={i} className="text-body-lg text-ink-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-h2 text-ink-primary">The approach.</h2>
          <div className="mt-6 max-w-2xl space-y-4">
            {project.approach.map((paragraph, i) => (
              <p key={i} className="text-body-lg text-ink-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {project.screens.length > 0 && (
        <section className="container-wide section-padding pt-0">
          <div className="grid grid-cols-12 gap-6">
            {project.screens.map((screen, i) => (
              <Reveal
                key={screen.src}
                delay={Math.min(i, 4) * 0.04}
                className={cn(
                  screen.span === 12 && "col-span-12",
                  screen.span === 8 && "col-span-12 md:col-span-8",
                  screen.span === 6 && "col-span-12 md:col-span-6"
                )}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="w-full overflow-hidden rounded-image bg-subtle text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
                >
                  <WorkImageContainer
                    src={screen.src}
                    alt={screen.caption ?? `${project.name} screen ${i + 1}`}
                    width={1920}
                    height={1080}
                    aspectRatio="aspect-[16/10]"
                    sizes={
                      screen.span === 12
                        ? "100vw"
                        : screen.span === 8
                          ? "66vw"
                          : "50vw"
                    }
                  />
                  {screen.caption && (
                    <p className="mt-3 text-caption text-ink-tertiary">
                      {screen.caption}
                    </p>
                  )}
                </button>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="container-content section-padding">
        <Reveal>
          <h2 className="font-display text-h2 text-ink-primary">
            What changed.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {project.outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="border-l-2 border-accent pl-6"
              >
                <p className="font-display text-display-lg text-ink-primary">
                  {outcome.metric}
                </p>
                <p className="mt-2 text-body-sm text-ink-secondary">
                  {outcome.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-body-lg text-ink-secondary">
            {project.outcomesNarrative}
          </p>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-h2 text-ink-primary">
            What I&apos;d do differently.
          </h2>
          <p className="mt-6 max-w-2xl text-body-lg text-ink-secondary">
            {project.reflection}
          </p>
        </Reveal>
      </section>

      <Lightbox
        screens={project.screens}
        projectName={project.name}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </article>
  );
}
