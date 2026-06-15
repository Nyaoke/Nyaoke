import Link from "next/link";
import { hero } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center section-padding">
      <div className="container-content">
        <Reveal>
          <p className="mono-eyebrow mb-6">{hero.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.04}>
          <h1 className="font-display text-display-xl text-ink-primary">
            {hero.headline.before}
            <em className="italic">{hero.headline.emphasis}</em>
            {hero.headline.after}
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[60ch] text-body-lg text-ink-secondary">
            {hero.subhead}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild>
              <Link href={hero.ctas.primary.href}>{hero.ctas.primary.label}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href={hero.ctas.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.ctas.secondary.label}
              </Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <hr className="my-10 border-default" />
          <dl className="flex flex-wrap gap-x-8 gap-y-2 text-body-sm">
            <div className="flex gap-2">
              <dt className="mono-eyebrow">{hero.metaRow[0]}</dt>
              <dd className="text-ink-secondary">{hero.metaRow[1]}</dd>
            </div>
            <div>
              <dd className="text-ink-tertiary">{hero.metaRow[2]}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
