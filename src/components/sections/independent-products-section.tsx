import Link from "next/link";
import { independentProjects } from "@/content/projects";
import { WorkImageContainer } from "@/components/work-image";
import { Reveal } from "@/components/reveal";

export function IndependentProductsSection() {
  return (
    <section className="section-padding">
      <div className="container-content">
        <Reveal>
          <p className="mono-eyebrow mb-4">Independent products</p>
          <h2 className="max-w-2xl font-display text-h2 text-ink-primary">
            Things I built because they needed to exist.
          </h2>
          <p className="mt-6 max-w-2xl text-body-lg text-ink-secondary">
            Four products built solo, from problem discovery through to working
            software. Each one addresses a gap I saw in African markets: carbon
            infrastructure, media operations, political intelligence, and
            hospitality workforce.
          </p>
        </Reveal>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {independentProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.04} className="min-w-[280px] md:min-w-0">
              <Link
                href={`/work/${project.slug}`}
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
              >
                <WorkImageContainer
                  src={project.cover}
                  alt={`${project.name} product screenshot`}
                  width={800}
                  height={1000}
                  aspectRatio="aspect-[4/5]"
                  containerClassName="rounded-image"
                  sizes="(max-width: 768px) 280px, 33vw"
                />
                <div className="mt-4">
                  <p className="mono-eyebrow mb-1">{project.category}</p>
                  <h3 className="font-display text-h3 text-ink-primary transition-colors duration-hover group-hover:text-ink-secondary">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-body-sm text-ink-secondary">
                    {project.tagline}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
