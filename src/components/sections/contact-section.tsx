import Link from "next/link";
import { contact, openTo } from "@/content/site";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-default section-padding">
      <div className="container-content">
        <Reveal>
          <p className="mono-eyebrow mb-4">Contact</p>
          <h2 className="font-display text-h1 text-ink-primary">
            Let&apos;s <em className="italic">make</em> something good.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal delay={0.04}>
            <div>
              <p className="text-body-lg text-ink-secondary">
                I am open to senior product and design roles, select partnerships,
                and conversations about building products for African markets and
                beyond.
              </p>
              <ul className="mt-8 space-y-3 text-body">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-ink-primary underline decoration-border-strong underline-offset-4 transition-colors duration-hover hover:text-ink-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <Link
                    href={contact.cal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-primary underline decoration-border-strong underline-offset-4 transition-colors duration-hover hover:text-ink-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
                  >
                    Book an intro call
                  </Link>
                </li>
                <li className="text-ink-secondary">{contact.phone}</li>
                <li className="text-ink-secondary">{contact.location}</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="mono-eyebrow mb-4">What I&apos;m open to</p>
              <ul className="space-y-4">
                {openTo.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-accent pl-4 text-body text-ink-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
