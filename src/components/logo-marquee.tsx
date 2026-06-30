"use client";

import Image from "next/image";
import { logos } from "@/content/home";

export function LogoMarquee() {
  const doubled = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-2" aria-label="Client logos">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-page to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-page to-transparent"
        aria-hidden="true"
      />
      <div className="flex w-max animate-marquee items-center gap-16 motion-reduce:animate-none">
        {doubled.map((src, i) => (
          <div key={i} className="flex h-10 w-[120px] shrink-0 items-center justify-center">
            <Image
              src={src}
              alt={i < logos.length ? `Client logo ${i + 1}` : ""}
              aria-hidden={i >= logos.length}
              width={120}
              height={40}
              className="h-full w-auto object-contain opacity-70"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
