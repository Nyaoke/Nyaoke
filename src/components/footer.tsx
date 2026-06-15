import Link from "next/link";
import { nav, social, contact } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-default bg-canvas section-padding">
      <div className="container-content">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-display-lg italic text-ink-primary">
              Ted Nyaoke
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="mono-eyebrow mb-4">Navigate</p>
            <ul className="space-y-2">
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
              <li>
                <Link
                  href={contact.cal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-ink-secondary transition-colors duration-hover hover:text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="mono-eyebrow mb-4">Connect</p>
            <ul className="space-y-2">
              {social.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-ink-secondary transition-colors duration-hover hover:text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-16 text-caption text-ink-tertiary">
          © 2026 Ted Nyaoke · Built in Nairobi
        </p>
      </div>
    </footer>
  );
}
