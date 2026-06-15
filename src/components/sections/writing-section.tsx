import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSortedPosts } from "@/content/writing";
import { formatDate } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function WritingSection() {
  const posts = getSortedPosts().slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container-content">
        <Reveal>
          <p className="mono-eyebrow mb-4">Writing</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-h2 text-ink-primary">
              Notes on the craft.
            </h2>
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 text-body-sm text-ink-secondary transition-colors duration-hover hover:text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
            >
              View all writing
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.04}>
              <Link
                href={`/writing/${post.slug}`}
                className="group block border-t border-default pt-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
              >
                <time
                  dateTime={post.date}
                  className="text-caption text-ink-tertiary"
                >
                  {formatDate(post.date)}
                </time>
                <h3 className="mt-3 font-display text-h3 text-ink-primary transition-colors duration-hover group-hover:text-ink-secondary">
                  {post.title}
                </h3>
                <p className="mt-3 text-body-sm text-ink-secondary">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-caption text-ink-tertiary">
                  {post.readTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
