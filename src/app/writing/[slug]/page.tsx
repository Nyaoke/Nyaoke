import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { writingPosts, getPost } from "@/content/writing";
import { formatDate } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

interface WritingPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return writingPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: WritingPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} · Ted Nyaoke`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function WritingPostPage({ params }: WritingPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="section-padding">
      <div className="container-content">
        <Reveal>
          <Link
            href="/writing"
            className="text-body-sm text-ink-tertiary transition-colors duration-hover hover:text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
          >
            ← Back to writing
          </Link>
        </Reveal>

        <header className="mt-8 max-w-[68ch]">
          <Reveal delay={0.04}>
            <time
              dateTime={post.date}
              className="text-caption text-ink-tertiary"
            >
              {formatDate(post.date)} · {post.readTime}
            </time>
            <h1 className="mt-4 font-display text-h1 text-ink-primary">
              {post.title}
            </h1>
          </Reveal>
        </header>

        <div className="prose-editorial mt-12 max-w-[68ch]">
          {post.body.map((paragraph, i) => (
            <Reveal key={i} delay={0.08 + i * 0.04}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
