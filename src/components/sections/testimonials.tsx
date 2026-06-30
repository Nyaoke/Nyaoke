import Image from "next/image";
import { testimonials } from "@/content/testimonials";
import { Reveal } from "@/components/reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Hear what my clients have to say.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="card-surface flex h-full flex-col p-8">
                <blockquote className="flex-1 text-ink-muted">{t.quote}</blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                    unoptimized
                  />
                  <div>
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-ink-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
