import { clientLogos } from "@/content/projects";
import { Reveal } from "@/components/reveal";

export function ClientLogosSection() {
  return (
    <section className="section-padding">
      <div className="container-content">
        <Reveal>
          <p className="mono-eyebrow mb-8">
            Selected clients and collaborators
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
          {clientLogos.map((logo, i) => (
            <Reveal key={logo} delay={i * 0.04}>
              <span className="font-display text-h3 text-ink-tertiary transition-colors duration-hover hover:text-ink-primary">
                {logo}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
