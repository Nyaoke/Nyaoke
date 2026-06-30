"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";
import { contact } from "@/content/site";
import { wordmark } from "@/content/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-page/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className="container-page flex h-16 items-center justify-between"
        aria-label="Main"
      >
        <Link href="/" className="text-[17px] font-semibold tracking-tight text-ink">
          {wordmark}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[15px] font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href={contact.cal} target="_blank" rel="noopener noreferrer" className="btn-primary h-10 px-5">
            Contact
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-page md:hidden">
          <div className="container-page flex h-16 items-center justify-between">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-[17px] font-semibold tracking-tight text-ink"
            >
              {wordmark}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-ink"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <div className="container-page flex flex-1 flex-col justify-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-4xl font-semibold tracking-tight text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={contact.cal}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 w-fit"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
