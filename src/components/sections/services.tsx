import { services } from "@/content/home";
import { Reveal } from "@/components/reveal";

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            {services.title}
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12">
            <p className="text-sm font-medium uppercase tracking-wide text-ink-faint">
              {services.techStackLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {services.techChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-page px-4 py-2 text-sm font-medium text-ink-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            {services.serviceTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-page"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
