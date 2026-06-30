"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion, AnimatePresence, motion } from "motion/react";
import { nav, contact, socials } from "@/content/site";
import { footerWords } from "@/content/home";

function CyclingWord() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % footerWords.length);
    }, 2000);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) {
    return <span className="text-ink-faint">{footerWords[0]}</span>;
  }

  return (
    <span className="relative inline-block align-top">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-block text-ink-faint"
          initial={{ y: "40%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-40%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        >
          {footerWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-footer text-page">
      <div className="container-page py-20 md:py-28">
        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Lets <CyclingWord /> incredible work together.
        </h2>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-3">
          <div>
            <p className="text-sm text-white/50">Speak to me</p>
            <p className="mt-1 text-lg font-medium">Email or book a call</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-6 block text-white/80 transition-colors hover:text-page"
            >
              {contact.email}
            </a>
            <div className="mt-6">
              <p className="text-sm text-white/50">Discovery Meeting</p>
              <Link
                href={contact.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-medium underline-offset-4 hover:underline"
              >
                Book Now
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-sm text-white/50">Or Call Me</p>
              <p className="mt-1 font-medium">{contact.phone}</p>
            </div>
            <div className="mt-6 flex gap-4 text-white/70">
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-page">
                Instagram
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-page">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm text-white/50">Menu</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 transition-colors hover:text-page">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm text-white/50">Legal</p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/terms" className="text-white/80 transition-colors hover:text-page">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/80 transition-colors hover:text-page">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-sm text-white/50">© 2025 Ted Nyaoke</p>
      </div>

      <div className="overflow-hidden">
        <p className="select-none whitespace-nowrap text-center font-semibold leading-none tracking-tighter text-white/[0.07] text-[22vw]">
          NYAOKE
        </p>
      </div>
    </footer>
  );
}
