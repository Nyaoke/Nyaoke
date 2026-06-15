import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WorkIndex } from "@/components/work-index";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design, web, mobile, and independent projects by Ted Nyaoke, 2021 to now.",
  openGraph: {
    title: "Work · Ted Nyaoke",
    description:
      "Selected product design, web, mobile, and independent projects by Ted Nyaoke, 2021 to now.",
  },
};

export default function WorkPage() {
  return (
    <div className="section-padding">
      <div className="container-content">
        <Reveal>
          <h1 className="font-display text-h1 text-ink-primary">
            Work, 2021 to now.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-ink-secondary">
            Enterprise design engagements, mobile products, and independent
            software built for African markets. Seven projects across fintech,
            energy, media, sports, carbon, and hospitality.
          </p>
        </Reveal>
        <WorkIndex />
      </div>
    </div>
  );
}
