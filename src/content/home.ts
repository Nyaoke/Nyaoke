export const hero = {
  eyebrow: "Available for Consultation",
  heading: "I Design Products that Ship.",
  body: "I work across the stack of product creation, from problem definition and design systems through shipped React. Based in Nairobi, working with teams globally.",
  primaryCta: { label: "Book a call with me", href: "https://cal.com/ted-nyaoke-5ahdth" },
  stat: { label: "99+ Happy clients", href: "/#testimonials" },
};

export const services = {
  title: "Services that supercharge your business.",
  techStackLabel: "My tech stack",
  techChips: [
    "Figma",
    "Webflow",
    "Adobe Photoshop",
    "ThreeJS",
    "Elementor",
    "Github",
    ".NET",
    "Wordpress",
  ],
  serviceTags: [
    "Brand Design",
    "Web Apps",
    "Landing Pages",
    "Mobile App Design",
    "SEO Optimization",
    "UX / UI Consultation",
  ],
};

export interface WorkHistoryEntry {
  company: string;
  role: string;
  period: string;
  hidden?: boolean;
}

export const about = {
  title: "Designing experiences that solve real problems.",
  portrait: "/images/about-portrait.png",
  banner: "/images/about-banner.png",
  name: "Ted Nyaoke",
  role: "Product Manager / UX Designer",
  workHistoryLabel: "My work history",
  workHistory: [
    { company: "Ogilvy Africa", role: "Senior Product Manager", period: "2025 - Ongoing" },
    { company: "Ogilvy Africa", role: "Senior UI/UX Designer", period: "2024-2025" },
    {
      company: "Yellow Pages",
      role: "UI/UX Designer / Frontend Developer",
      period: "2023-2024",
    },
    {
      company: "PSM Consult",
      role: "Product Designer / Frontend Developer",
      period: "2022-2023",
      hidden: true,
    },
    {
      company: "Digital Media Kenya",
      role: "UI/UX Designer / Website Marketing Manager",
      period: "2021 - Ongoing",
      hidden: true,
    },
  ] as WorkHistoryEntry[],
  bio: [
    "I'm a Senior Product Manager / Designer at Ogilvy Africa, where I lead product design across fintech, telco, and enterprise SaaS engagements. I was promoted from Senior Product Designer to Product Manager in 2025, which gave me operating leverage on the work I already cared about most: shaping the product itself.",
    "My differentiator is range with depth. I ship production frontend in React, TypeScript, and Next.js. I work with design systems at scale (120+ components, five teams, 40% handoff reduction). I lead research and validation work with real users. And I've built and shipped eight independent products outside of Ogilvy in fintech, climate, political intelligence, hospitality SaaS, and creator economy categories.",
    "Recognition includes Creative Champion of the Year at Ogilvy Africa 2025, and a 1st place finish at the East Africa Future Leaders Challenge with Agile Hub. I work async-first and have shipped with distributed teams across Nairobi, London, and the US.",
  ],
};

export const mediaCommand = {
  eyebrow: "Currently building",
  title: "Working on MediaCommand.",
  body: "A command center for media teams to plan campaigns, coordinate publishing, and understand what is moving the work forward.",
  cta: { label: "View project", href: "/projects/mediacommand" },
  label: "MediaCommand",
  status: "Alpha build",
  subheading: "Plan the week. Ship the story. Read the signal.",
  lede: "One operating layer for campaigns, creators, channels, approvals, and performance loops.",
  features: [
    {
      title: "Campaign planning",
      body: "A clearer weekly operating view for ideas, owners, dependencies, and launch timing.",
    },
    {
      title: "Publishing workflow",
      body: "A practical flow for drafting, reviewing, approving, and shipping across channels.",
    },
    {
      title: "Performance clarity",
      body: "Simple visibility into what shipped, what resonated, and what needs the next move.",
    },
  ],
};

export const discoveryCta = {
  heading: "Still not sure? Book a free discovery call.",
  body: "Learn more about how I work and how I can help you and your business take the next step.",
  cta: { label: "Schedule Now", href: "https://cal.com/ted-nyaoke-5ahdth" },
};

export const blogPreview = {
  title: "From my blog, UX design insights.",
  viewAll: { label: "View All", href: "/blog" },
};

export const footerWords = ["design", "build", "create"];

export const logos = [
  "/images/logo-1.png",
  "/images/logo-2.png",
  "/images/logo-3.png",
  "/images/logo-4.png",
  "/images/logo-5.png",
  "/images/logo-6.png",
  "/images/logo-7.png",
];
