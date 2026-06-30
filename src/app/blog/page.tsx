import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/posts";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Blog · Ted Nyaoke Portfolio",
  description: "UX design insights and notes on the craft of building products.",
};

export default function BlogPage() {
  return (
    <section className="pt-32 md:pt-40">
      <div className="container-page">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            From my blog, UX design insights.
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-subtle">
                  <div className="flex h-full items-end bg-gradient-to-br from-[#1a1a1a] to-[#3a3a3a] p-5 transition-transform duration-500 group-hover:scale-[1.03]">
                    <span className="text-sm font-medium text-white/70">
                      {post.date}
                    </span>
                  </div>
                </div>
                <h2 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-ink">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink-faint">
                  {post.date} · {post.author}
                </p>
                <p className="mt-3 text-ink-muted">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
