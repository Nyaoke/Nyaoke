import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutPreview } from "@/content/site";
import { WorkImageContainer } from "@/components/work-image";
import { Reveal } from "@/components/reveal";

export function AboutPreviewSection() {
  return (
    <section className="section-padding">
      <div className="container-content">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <WorkImageContainer
              src="/work/_placeholder.svg"
              alt="Portrait of Ted Nyaoke"
              width={800}
              height={1000}
              aspectRatio="aspect-[4/5]"
              containerClassName="rounded-image"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </Reveal>
          <div className="md:col-span-7">
            <Reveal>
              <p className="mono-eyebrow mb-4">About</p>
              <h2 className="font-display text-h2 text-ink-primary">
                A short version of a long story.
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {aboutPreview.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <p className="text-body-lg text-ink-secondary">{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.16}>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-body-sm text-ink-primary transition-colors duration-hover hover:text-ink-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
              >
                Read the longer version
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
