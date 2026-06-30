import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/content/posts";
import { Reveal } from "@/components/reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} · Ted Nyaoke Portfolio`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="pt-32 md:pt-40">
      <div className="container-page">
        <Reveal>
          <Link
            href="/blog"
            className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            ← Back to blog
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <header className="mt-8 max-w-[68ch]">
            <p className="text-sm text-ink-faint">
              {post.date} · {post.author}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {post.title}
            </h1>
          </header>
        </Reveal>

        <div className="mt-10 max-w-[68ch] space-y-6 pb-10">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={0.05 + i * 0.04}>
              <p className="text-lg leading-[1.7] text-ink-muted">{para}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
