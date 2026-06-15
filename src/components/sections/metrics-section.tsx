import { metrics } from "@/content/site";
import { MetricCounter } from "@/components/metric-counter";
import { Reveal } from "@/components/reveal";

export function MetricsSection() {
  return (
    <section className="bg-subtle section-padding">
      <div className="container-content">
        <Reveal>
          <p className="mono-eyebrow mb-4">By the numbers</p>
          <h2 className="font-display text-h2 text-ink-primary">
            Outcomes, not outputs.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.04}>
              <div>
                <MetricCounter
                  value={metric.value}
                  className="text-ink-primary"
                />
                <p className="mt-3 text-body-sm text-ink-secondary">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
