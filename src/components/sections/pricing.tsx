import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  pricingSteps,
  pricingSupporting,
  pricingCards,
} from "@/content/pricing";
import { contact } from "@/content/site";
import { LogoMarquee } from "@/components/logo-marquee";
import { Reveal } from "@/components/reveal";

export function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Simple pricing. Standout designs.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pricingSteps.map((step, i) => (
              <div key={step.title} className="card-surface p-6">
                <span className="text-sm font-medium text-ink-faint">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              href={contact.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Call
            </Link>
            <div className="text-sm text-ink-muted">
              {pricingSupporting.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            <div className="flex flex-col justify-between rounded-[28px] bg-ink p-8 text-page lg:col-span-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-sm text-white/70">Slots available</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  Hire me today
                </h3>
                <p className="mt-2 text-white/70">
                  Skip the agency markup and work directly with an experienced
                  designer.
                </p>
              </div>
              <div className="mt-10 flex justify-end">
                <Image
                  src="/images/pricing-lightning.png"
                  alt="Lightning bolt"
                  width={180}
                  height={180}
                  className="h-32 w-auto object-contain"
                  unoptimized
                />
              </div>
            </div>

            <div className="grid gap-6 lg:col-span-7">
              {pricingCards.map((card) => (
                <div key={card.title} className="card-surface p-8 shadow-card">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-ink-muted">{card.body}</p>

                  {card.price && (
                    <div className="mt-6">
                      <p className="text-sm text-ink-faint">{card.priceLabel}</p>
                      <p className="text-4xl font-semibold tracking-tight">
                        {card.price}
                      </p>
                    </div>
                  )}

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-ink-muted">
                        <Check size={16} className="shrink-0 text-ink" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href={card.cta.href}
                      target={card.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="btn-primary"
                    >
                      {card.cta.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-20 text-center text-sm font-medium uppercase tracking-wide text-ink-faint">
            Trusted by many
          </p>
        </Reveal>
      </div>
      <div className="mt-8">
        <LogoMarquee />
      </div>
    </section>
  );
}
