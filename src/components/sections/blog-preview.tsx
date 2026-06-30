import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPreview } from "@/content/home";
import { posts } from "@/content/posts";
import { Reveal } from "@/components/reveal";

export function BlogPreview() {
  const items = posts.slice(0, 3);

  return (
    <section id="blog" className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              {blogPreview.title}
            </h2>
            <Link
              href={blogPreview.viewAll.href}
              className="inline-flex items-center gap-2 text-[15px] font-medium text-ink"
            >
              {blogPreview.viewAll.label}
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-subtle">
                  <div className="flex h-full items-end bg-gradient-to-br from-[#1a1a1a] to-[#3a3a3a] p-5 transition-transform duration-500 group-hover:scale-[1.03]">
                    <span className="text-sm font-medium text-white/70">
                      {post.date}
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-ink">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-ink-faint">
                  {post.date} · {post.author}
                </p>
                {i === 0 && (
                  <p className="mt-3 text-ink-muted">{post.excerpt}</p>
                )}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
