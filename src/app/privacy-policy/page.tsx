import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · Ted Nyaoke Portfolio",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 md:pt-40">
      <div className="container-page pb-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-ink-muted">
          Your privacy matters. This policy describes how information submitted
          through this website is handled. Full policy will be provided here.
          For questions, reach out at tednyaoke@gmail.com.
        </p>
      </div>
    </section>
  );
}
