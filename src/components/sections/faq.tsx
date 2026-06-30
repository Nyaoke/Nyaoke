"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { faqItems } from "@/content/faq";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="section-pad">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Your questions answered.
          </h2>
        </Reveal>

        <div className="mt-12 mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.number}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-ink-faint">
                    {item.number}
                  </span>
                  <span className="flex-1 text-lg font-medium text-ink">
                    {item.question}
                  </span>
                  <Plus
                    size={20}
                    className={cn(
                      "shrink-0 text-ink transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-10 pr-10 text-ink-muted">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
