"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { nav, contact } from "@/content/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-hover",
        scrolled
          ? "border-b border-default bg-canvas/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        className="container-content flex h-full items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display text-body-lg text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
        >
          Ted Nyaoke
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-body-sm text-ink-secondary transition-colors duration-hover hover:text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 text-caption text-ink-tertiary">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span>Available for select roles, 2026</span>
          </div>
          <Button variant="outline" size="pill" asChild>
            <Link href={contact.cal} target="_blank" rel="noopener noreferrer">
              Contact
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="mt-16 flex flex-col gap-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-h2 text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={contact.cal}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="font-display text-h2 text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
              >
                Contact
              </Link>
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-default pt-6">
              <div className="flex items-center gap-2 text-caption text-ink-tertiary">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>Available for select roles, 2026</span>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-input border border-default text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
