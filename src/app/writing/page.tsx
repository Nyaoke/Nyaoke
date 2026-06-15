import type { Metadata } from "next";
import Link from "next/link";
import { getSortedPosts } from "@/content/writing";
import { formatDate } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on product design, collaboration, and building for African markets by Ted Nyaoke.",
  openGraph: {
    title: "Writing · Ted Nyaoke",
    description:
      "Notes on product design, collaboration, and building for African markets.",
  },
};

export default function WritingPage() {
  const posts = getSortedPosts();

  return (
    <div className="section-padding">
      <div className="container-content">
        <Reveal>
          <h1 className="font-display text-h1 text-ink-primary">Writing</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-ink-secondary">
            Notes on design, product, and the practice of building things that
            matter.
          </p>
        </Reveal>

        <ul className="mt-16 divide-y divide-border">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.04}>
              <li>
                <Link
                  href={`/writing/${post.slug}`}
                  className="group block py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
                >
                  <time
                    dateTime={post.date}
                    className="text-caption text-ink-tertiary"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h2 className="mt-3 font-display text-h2 text-ink-primary transition-colors duration-hover group-hover:text-ink-secondary">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-body text-ink-secondary">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-caption text-ink-tertiary">
                    {post.readTime}
                  </p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
}
