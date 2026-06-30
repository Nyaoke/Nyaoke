import Image from "next/image";
import { featuredTestimonial } from "@/content/testimonials";
import { Reveal } from "@/components/reveal";

export function FeaturedTestimonial() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <figure className="mx-auto max-w-4xl text-center">
            <blockquote className="text-2xl font-medium leading-snug tracking-tight text-ink md:text-4xl md:leading-tight">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-10 flex items-center justify-center gap-4">
              <Image
                src={featuredTestimonial.avatar}
                alt={featuredTestimonial.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
                unoptimized
              />
              <div className="text-left">
                <p className="font-semibold text-ink">{featuredTestimonial.name}</p>
                <p className="text-sm text-ink-muted">{featuredTestimonial.role}</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
