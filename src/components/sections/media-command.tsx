import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mediaCommand } from "@/content/home";
import { Reveal } from "@/components/reveal";

export function MediaCommand() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="rounded-[28px] bg-ink p-8 text-page md:p-14">
            <p className="text-sm font-medium uppercase tracking-wide text-white/50">
              {mediaCommand.eyebrow}
            </p>
            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                {mediaCommand.title}
              </h2>
              <Link
                href={mediaCommand.cta.href}
                className="inline-flex items-center gap-1 text-[15px] font-medium text-white/80 transition-colors hover:text-page"
              >
                {mediaCommand.cta.label}
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {mediaCommand.body}
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="text-lg font-semibold">{mediaCommand.label}</span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/70">
                {mediaCommand.status}
              </span>
            </div>

            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                {mediaCommand.subheading}
              </h3>
              <p className="mt-3 max-w-2xl text-white/70">{mediaCommand.lede}</p>

              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {mediaCommand.features.map((feature) => (
                  <div key={feature.title} className="rounded-2xl bg-white/[0.04] p-6">
                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {feature.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
