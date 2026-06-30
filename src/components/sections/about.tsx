"use client";

import { useState } from "react";
import Image from "next/image";
import { about } from "@/content/home";
import { socials } from "@/content/site";
import { Reveal } from "@/components/reveal";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function About() {
  const [showAll, setShowAll] = useState(false);
  const visible = about.workHistory.filter((e) => showAll || !e.hidden);

  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            {about.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-border bg-subtle">
              <Image
                src={about.portrait}
                alt={about.name}
                width={640}
                height={800}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-ink">{about.name}</p>
                <p className="text-sm text-ink-muted">{about.role}</p>
              </div>
              <div className="flex gap-3">
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:text-ink"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:text-ink"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-5">
                {about.bio.map((para, i) => (
                  <p key={i} className="text-lg leading-relaxed text-ink-muted">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-10">
                <p className="text-sm font-medium uppercase tracking-wide text-ink-faint">
                  {about.workHistoryLabel}
                </p>
                <ul className="mt-4 divide-y divide-border">
                  {visible.map((entry, i) => (
                    <li
                      key={`${entry.company}-${i}`}
                      className="flex items-center justify-between gap-4 py-4"
                    >
                      <div>
                        <p className="font-semibold text-ink">{entry.company}</p>
                        <p className="text-sm text-ink-muted">{entry.role}</p>
                      </div>
                      <span className="whitespace-nowrap text-sm text-ink-faint">
                        {entry.period}
                      </span>
                    </li>
                  ))}
                </ul>
                {about.workHistory.some((e) => e.hidden) && (
                  <button
                    type="button"
                    onClick={() => setShowAll((v) => !v)}
                    className="mt-4 text-[15px] font-medium text-ink underline-offset-4 hover:underline"
                  >
                    {showAll ? "Show less" : "Show all"}
                  </button>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-subtle">
            <Image
              src={about.banner}
              alt="Ted Nyaoke working"
              width={1280}
              height={560}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
