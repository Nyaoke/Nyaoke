import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hero } from "@/content/home";
import { LogoMarquee } from "@/components/logo-marquee";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="pt-32 md:pt-40">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow-pill">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {hero.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight md:text-7xl">
            {hero.heading}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            {hero.body}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.stat.href}
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-ink"
            >
              {hero.stat.label}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-24">
        <LogoMarquee />
      </div>
    </section>
  );
}
