import { Search, ShoppingBag, User } from "lucide-react";

const navLinks = [
  "Engagement rings",
  "Wedding bands",
  "Diamonds",
  "Earrings",
  "Necklaces",
  "Bracelets",
  "Gifts",
];

export function MainNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rc-border bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="text-sm font-medium tracking-[0.24em] text-rc-text">RARE CARAT</div>
        <nav className="hidden items-center gap-7 text-sm text-rc-text lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link} href="#" className="transition-colors duration-150 hover:text-rc-muted">
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-rc-text">
          <button type="button" aria-label="Search" className="rounded-md p-1 transition-colors duration-150 hover:bg-rc-hover">
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Account" className="rounded-md p-1 transition-colors duration-150 hover:bg-rc-hover">
            <User className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Cart" className="rounded-md p-1 transition-colors duration-150 hover:bg-rc-hover">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
