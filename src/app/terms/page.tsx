import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of service · Ted Nyaoke Portfolio",
};

export default function TermsPage() {
  return (
    <section className="pt-32 md:pt-40">
      <div className="container-page pb-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Terms of service
        </h1>
        <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-ink-muted">
          These terms govern the use of this website and the design services
          offered through it. Full terms will be provided here. For questions,
          reach out at tednyaoke@gmail.com.
        </p>
      </div>
    </section>
  );
}
