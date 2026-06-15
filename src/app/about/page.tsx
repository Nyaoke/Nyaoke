import type { Metadata } from "next";
import Link from "next/link";
import {
  aboutOpening,
  experience,
  education,
  recognition,
  currently,
  contact,
  openTo,
} from "@/content/site";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ted Nyaoke is a Senior Product Designer and Product Manager based in Nairobi, Kenya. Architecture background, five years in product, building independent software for African markets.",
  openGraph: {
    title: "About · Ted Nyaoke",
    description:
      "Senior Product Designer and Product Manager based in Nairobi. Architecture background, five years in product.",
  },
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-content">
        <Reveal>
          <h1 className="font-display text-h1 text-ink-primary">About</h1>
        </Reveal>

        <div className="mt-12 max-w-[68ch] space-y-6">
          {aboutOpening.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p className="text-body-lg leading-[1.7] text-ink-secondary">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <section className="mt-24">
          <Reveal>
            <h2 className="font-display text-h2 text-ink-primary">Experience</h2>
          </Reveal>
          <div className="mt-12 space-y-0">
            {experience.map((item, i) => (
              <Reveal key={item.company + item.period} delay={i * 0.04}>
                <div className="grid gap-4 border-t border-default py-8 md:grid-cols-12">
                  <p className="font-mono text-mono-label text-ink-tertiary md:col-span-3">
                    {item.period}
                  </p>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-h3 text-ink-primary">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-body-sm text-ink-tertiary">
                      {item.company}
                    </p>
                    <p className="mt-4 text-body text-ink-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-h2 text-ink-primary">Education</h2>
            <ul className="mt-8 space-y-6">
              {education.map((item) => (
                <li key={item.institution}>
                  <p className="text-body text-ink-primary">{item.degree}</p>
                  <p className="mt-1 text-body-sm text-ink-tertiary">
                    {item.institution}, {item.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="font-display text-h2 text-ink-primary">
              Recognition
            </h2>
            <ul className="mt-8 space-y-6">
              {recognition.map((item) => (
                <li key={item.title}>
                  <p className="text-body text-ink-primary">{item.title}</p>
                  <p className="mt-1 text-body-sm text-ink-tertiary">
                    {item.organization}, {item.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="mt-24">
          <Reveal>
            <p className="mono-eyebrow mb-4">Currently</p>
            <ul className="space-y-3">
              {currently.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-body text-ink-secondary"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="mt-24 rounded-card border border-default bg-subtle p-8 md:p-12">
          <Reveal>
            <h2 className="font-display text-h2 text-ink-primary">
              Let&apos;s <em className="italic">talk</em>.
            </h2>
            <p className="mt-6 max-w-xl text-body-lg text-ink-secondary">
              I am open to senior product and design roles, select partnerships,
              and conversations about building for African markets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`mailto:${contact.email}`}
                className="inline-flex h-10 items-center rounded-input bg-ink-primary px-5 text-body-sm text-canvas transition-colors duration-hover hover:bg-ink-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
              >
                {contact.email}
              </Link>
              <Link
                href={contact.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-input border border-default px-5 text-body-sm text-ink-primary transition-colors duration-hover hover:bg-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
              >
                Book an intro call
              </Link>
            </div>
            <ul className="mt-8 space-y-2">
              {openTo.map((item) => (
                <li key={item} className="text-body-sm text-ink-tertiary">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
