import { Hero } from "@/components/sections/hero";
import { LatestProjects } from "@/components/sections/latest-projects";
import { FeaturedTestimonial } from "@/components/sections/featured-testimonial";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { MediaCommand } from "@/components/sections/media-command";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { DiscoveryCta } from "@/components/sections/discovery-cta";
import { BlogPreview } from "@/components/sections/blog-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestProjects />
      <FeaturedTestimonial />
      <Services />
      <About />
      <MediaCommand />
      <Pricing />
      <Testimonials />
      <Faq />
      <DiscoveryCta />
      <BlogPreview />
    </>
  );
}
