export interface NavLink {
  label: string;
  href: string;
}

export const nav: NavLink[] = [
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
];

export const contact = {
  email: "tednyaoke@gmail.com",
  cal: "https://cal.com/ted-nyaoke-5ahdth",
  phone: "+254 721 650793",
};

export const socials = {
  instagram: "https://www.instagram.com",
  linkedin: "https://www.linkedin.com/in/ted-nyaoke-841a56208/",
};

export const siteMeta = {
  title: "Ted Nyaoke Portfolio",
  description:
    "Frontend Developer & UI/UX Designer skilled in HTML, CSS, JavaScript, React, and Vue. I build engaging, user-focused, and scalable web apps with modern design, usability, and accessibility in mind.",
  url: "https://ted-nyaoke.framer.website",
};

export const wordmark = "Ted Nyaoke";
