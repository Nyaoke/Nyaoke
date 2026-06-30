import Image from "next/image";
import Link from "next/link";
import { discoveryCta } from "@/content/home";
import { Reveal } from "@/components/reveal";

export function DiscoveryCta() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="grid items-center gap-8 overflow-hidden rounded-[28px] border border-border bg-subtle p-8 md:grid-cols-2 md:p-14">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {discoveryCta.heading}
              </h2>
              <p className="mt-4 text-lg text-ink-muted">{discoveryCta.body}</p>
              <Link
                href={discoveryCta.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                {discoveryCta.cta.label}
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/cta-image.png"
                alt="Book a discovery call"
                width={640}
                height={480}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
