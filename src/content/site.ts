export interface HeroContent {
  eyebrow: string;
  headline: {
    before: string;
    emphasis: string;
    after: string;
  };
  subhead: string;
  ctas: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  metaRow: [string, string, string];
}

export interface Capability {
  number: string;
  title: string;
  description: string;
  tools: string[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: number;
}

export interface RecognitionItem {
  title: string;
  organization: string;
  year: number;
}

export interface ContactInfo {
  email: string;
  cal: string;
  phone: string;
  location: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const hero: HeroContent = {
  eyebrow: "SENIOR PRODUCT DESIGNER & PRODUCT MANAGER · NAIROBI",
  headline: {
    before: "Design that ",
    emphasis: "compounds",
    after: ".",
  },
  subhead:
    "I design and build digital products that earn their place in people's lives. Currently leading product at Ogilvy Africa. Previously at Yellow Pages, PSM Consult. Building independent products on the side that solve real problems for the African market.",
  ctas: {
    primary: { label: "See selected work", href: "#work" },
    secondary: {
      label: "Book an intro call",
      href: "https://cal.com/ted-nyaoke-5ahdth",
    },
  },
  metaRow: ["Currently", "Senior PM, Ogilvy Africa", "Open to global remote roles"],
};

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Product Management",
    description:
      "I lead products from ambiguous problem to shipped outcome. I write specs, run discovery, manage roadmaps, and partner with engineering and design to make decisions that compound. My promotion to PM at Ogilvy Africa came from reducing a fintech onboarding drop-off by 21 percentage points in six weeks.",
    tools: ["Linear", "Notion", "Figma", "Mixpanel", "Amplitude"],
  },
  {
    number: "02",
    title: "Product Design",
    description:
      "Five years of UI and UX practice across fintech, e-commerce, media, and enterprise. I lead with systems thinking inherited from a background in architecture. I have built and maintained a 120+ component design system in production.",
    tools: [
      "Figma",
      "Figma MCP Server",
      "Material UI",
      "design tokens at scale",
    ],
  },
  {
    number: "03",
    title: "Frontend Engineering",
    description:
      "I ship the things I design when the team needs me to. React, Next.js, TypeScript, Tailwind. Comfortable in the stack from API integration through to accessible component primitives.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind", "Stripe", "Twilio", "AWS"],
  },
];

export const metrics: Metric[] = [
  {
    value: "38 → 17%",
    label: "Fintech onboarding drop-off, reduced in 6 weeks",
  },
  {
    value: "120+",
    label: "Design system components, adopted by 5 product teams",
  },
  {
    value: "$200K+",
    label: "Annual enterprise retainers secured",
  },
  {
    value: "40%",
    label: "Reduction in design-to-engineering handoff time",
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2025 to Ongoing",
    role: "Product Manager",
    company: "Ogilvy Africa",
    description:
      "Promoted from Senior Product Designer after leading the fintech onboarding redesign that moved drop-off from 38% to 17%.",
  },
  {
    period: "2024 to 2025",
    role: "Senior Product Designer",
    company: "Ogilvy Africa",
    description:
      "Led design systems work and shipped enterprise design engagements totaling $200K+ in annual retainer renewals.",
  },
  {
    period: "2023 to 2024",
    role: "Senior Product Designer and Frontend Developer",
    company: "Yellow Pages Kenya",
    description:
      "Owned product design end-to-end, built the React and Next.js component library, shipped the new directory experience.",
  },
  {
    period: "2022 to 2023",
    role: "Product Designer and Frontend Developer",
    company: "PSM Consult",
    description:
      "Designed and built client products across SME software, including the Care Connect platform with Stripe integration.",
  },
  {
    period: "2021 to Ongoing",
    role: "UI/UX Designer and Website Marketing Manager",
    company: "Digital Media Kenya",
    description:
      "Concurrent consultancy. Ongoing client design and front-end development work alongside full-time roles.",
  },
];

export const education: EducationItem[] = [
  {
    degree: "BSc International Business Administration",
    institution: "USIU-Africa",
    year: 2021,
  },
  {
    degree: "Diploma in Architecture, 2nd Class Upper",
    institution: "JKUAT",
    year: 2017,
  },
];

export const recognition: RecognitionItem[] = [
  {
    title: "Creative Champion of the Year",
    organization: "Ogilvy Africa",
    year: 2025,
  },
  {
    title: "1st place, East Africa Future Leaders Challenge",
    organization: "Agile Hub",
    year: 2025,
  },
  {
    title: "Wrike Certified Professional",
    organization: "Wrike",
    year: 2024,
  },
];

export const contact: ContactInfo = {
  email: "tednyaoke@gmail.com",
  cal: "https://cal.com/ted-nyaoke-5ahdth",
  phone: "+254 721 650793",
  location: "Nairobi, Kenya",
};

export const openTo: string[] = [
  "Senior PM and Senior Design roles, remote-friendly",
  "Selected design and product partnerships",
  "Speaking, mentoring, and writing",
];

export const social: SocialLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "Read.cv", href: "#" },
  { label: "GitHub", href: "#" },
];

export const nav: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
];

export const aboutPreview = {
  paragraphs: [
    "I started in architecture at JKUAT, where I learned to think in systems, constraints, and the space between what people need and what gets built. That foundation carried into my IBA at USIU-Africa and eventually into product design, where the same discipline applies: understand the problem deeply, then make the smallest set of decisions that unlock the most value.",
    "My career moved through Digital Media Kenya, PSM Consult, and Yellow Pages Kenya, where I owned design and front-end development for products used by thousands. In March 2025, I was promoted to Product Manager at Ogilvy Africa after leading a fintech onboarding redesign that cut drop-off from 38% to 17% in six weeks.",
    "Alongside client work, I build independent products for problems I see in the African market: carbon credit infrastructure, media operations, political intelligence, and hospitality workforce platforms. Agile Hub won first place at the East Africa Future Leaders Challenge 2025.",
  ],
};

export const aboutOpening = [
  "I am a product designer and product manager based in Nairobi. I have spent five years shipping digital products across fintech, media, enterprise, and consumer, and the last two years building independent products that solve problems I have seen firsthand in African markets.",
  "My path started in architecture. I studied at JKUAT, earned a diploma with 2nd Class Upper honors, and carried that systems-thinking approach into business at USIU-Africa and eventually into product. The thread that connects all of it: I care about the gap between what people need and what actually gets built.",
  "Today I lead product at Ogilvy Africa, where I was promoted from Senior Product Designer in March 2025 after reducing a fintech onboarding drop-off by 21 percentage points. I also build products on the side: Kijani Flow, MediaCommand, Pulse, and Agile Hub.",
];

export const currently = [
  "Senior PM at Ogilvy Africa",
  "Building Kijani Flow and MediaCommand",
  "Open to global remote roles in 2026",
];

export const siteMetadata = {
  title: "Ted Nyaoke",
  description:
    "Senior Product Designer and Product Manager based in Nairobi. I design and build digital products for global tech companies and the African market.",
  url: "https://tednyaoke.com",
  ogImage: "/og.png",
};
