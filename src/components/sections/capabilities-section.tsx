import { capabilities } from "@/content/site";
import { Reveal } from "@/components/reveal";

export function CapabilitiesSection() {
  return (
    <section className="section-padding">
      <div className="container-content">
        <Reveal>
          <p className="mono-eyebrow mb-4">Capabilities</p>
          <h2 className="font-display text-h2 text-ink-primary">
            Three crafts, one practice.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.number} delay={i * 0.04}>
              <div>
                <p className="mono-eyebrow mb-4">{cap.number}</p>
                <h3 className="font-display text-h3 text-ink-primary">
                  {cap.title}
                </h3>
                <p className="mt-4 text-body text-ink-secondary">
                  {cap.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {cap.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-input border border-default px-3 py-1 text-caption text-ink-tertiary"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
