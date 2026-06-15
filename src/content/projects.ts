export type ProjectCategory = "Product" | "Web" | "Independent" | "Mobile";

export type HomeLayout = "full" | "left" | "right";

export type ScreenSpan = 6 | 8 | 12;

export interface ProjectScreen {
  src: string;
  caption?: string;
  span: ScreenSpan;
}

export interface ProjectOutcome {
  metric: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  year: number;
  featured: boolean;
  homeLayout: HomeLayout;
  role: string;
  team: string;
  timeline: string;
  stack: string[];
  cover: string;
  hero: string;
  context: string[];
  approach: string[];
  screens: ProjectScreen[];
  outcomes: ProjectOutcome[];
  outcomesNarrative: string;
  reflection: string;
}

const placeholderContext = ["Replace with case study content."];
const placeholderApproach = ["Replace with case study content."];
const placeholderOutcomes: ProjectOutcome[] = [
  { metric: "X", label: "Replace with outcome metric" },
];
const placeholderNarrative = "Replace with case study content.";
const placeholderReflection = "Replace with case study content.";

export const projects: Project[] = [
  {
    slug: "kijani-flow",
    name: "Kijani Flow",
    tagline:
      "A carbon credits exchange for African voluntary and compliance markets.",
    category: "Independent",
    year: 2025,
    featured: true,
    homeLayout: "full",
    role: "Founder, designer, engineer",
    team: "Solo build",
    timeline: "4 months",
    stack: ["React", "Supabase", "TypeScript", "Tailwind", "i18next"],
    cover: "/work/kijani-flow/cover.png",
    hero: "/work/kijani-flow/hero.png",
    context: [
      "African carbon markets are growing rapidly but the infrastructure to trade credits transparently is fragmented.",
      "Kijani Flow is a real-time exchange for voluntary and compliance credits, designed around the operational realities of project developers, retiring corporates, and regulators.",
    ],
    approach: [
      "Four role-based dashboards, real-time order matching, an immutable retirement ledger, AI-assisted data ingestion, eight-language i18n with right-to-left support, multi-currency settlement.",
    ],
    screens: [
      { src: "/work/kijani-flow/screen-1.png", span: 12 },
      { src: "/work/kijani-flow/screen-2.png", span: 8 },
      { src: "/work/kijani-flow/screen-3.png", span: 6 },
    ],
    outcomes: [
      { metric: "8", label: "Languages supported with RTL" },
      { metric: "4", label: "Role-based dashboards" },
      { metric: "$150K+", label: "Estimated platform market value" },
    ],
    outcomesNarrative:
      "Built end-to-end in four months. Estimated build value of $50K to $90K, market value $150K to $350K+ based on comparable carbon registry platforms.",
    reflection:
      "I would have started with the retirement ledger schema rather than the order book. The ledger is the trust artifact, everything else is interface.",
  },
  {
    slug: "mediacommand",
    name: "MediaCommand",
    tagline:
      "A 20-module cross-channel media operating system for the African ad market.",
    category: "Independent",
    year: 2025,
    featured: true,
    homeLayout: "left",
    role: "Founder, product, design",
    team: "Solo with Claude and Codex",
    timeline: "Ongoing",
    stack: ["Next.js", "TypeScript", "Claude", "Codex"],
    cover: "/work/mediacommand/cover.png",
    hero: "/work/mediacommand/hero.png",
    context: [
      "Media agencies in Africa run on spreadsheets and screenshots.",
      "MediaCommand replaces twenty point-tools with one operating system covering planning, buying, monitoring, post-campaign analysis, and client reporting.",
    ],
    approach: [
      "Twenty modules, each replacing a workflow that currently lives in Excel or PowerPoint, built as an agentic tool that drafts plans, validates against client briefs, and produces presentation-ready outputs.",
    ],
    screens: [
      { src: "/work/mediacommand/screen-1.png", span: 12 },
      { src: "/work/mediacommand/screen-2.png", span: 6 },
      { src: "/work/mediacommand/screen-3.png", span: 6 },
    ],
    outcomes: [
      { metric: "20", label: "Modules covering the agency workflow" },
      { metric: "GITEX", label: "Demoed at GITEX Kenya 2025" },
    ],
    outcomesNarrative:
      "Currently in pilot with select Ogilvy Africa teams.",
    reflection:
      "Twenty modules is too many for v1. I am collapsing the next iteration into the six that earn the most time back per week.",
  },
  {
    slug: "pulse",
    name: "Pulse",
    tagline: "Political sentiment intelligence for Kenya's 47 counties.",
    category: "Independent",
    year: 2025,
    featured: true,
    homeLayout: "right",
    role: "Founder, designer, engineer",
    team: "Solo",
    timeline: "Ongoing",
    stack: ["Next.js", "Claude", "NLP"],
    cover: "/work/pulse/cover.png",
    hero: "/work/pulse/hero.png",
    context: [
      "Political polling in Kenya is expensive, slow, and methodologically limited.",
      "Pulse uses Claude-powered NLP to read social signals in code-switched Kenyan English and Swahili, surfacing sentiment trends per county in near-real-time.",
    ],
    approach: [
      "Tuned the NLP layer to handle Sheng and code-switching, built a competitor benchmarking module and a campaign strategy workspace on top of the raw signal.",
    ],
    screens: [
      { src: "/work/pulse/screen-1.png", span: 8 },
      { src: "/work/pulse/screen-2.png", span: 6 },
      { src: "/work/pulse/screen-3.png", span: 12 },
    ],
    outcomes: [
      { metric: "47", label: "Counties tracked" },
      { metric: "2", label: "Languages with code-switching support" },
    ],
    outcomesNarrative: "In early pilot.",
    reflection: "Replace with reflection as the product matures.",
  },
  {
    slug: "agile-hub",
    name: "Agile Hub",
    tagline:
      "B2B SaaS workforce platform for East Africa's hospitality sector.",
    category: "Independent",
    year: 2025,
    featured: true,
    homeLayout: "left",
    role: "Founder, product, design, engineering",
    team: "Solo",
    timeline: "6 months",
    stack: ["Next.js", "TypeScript", "Supabase"],
    cover: "/work/agile-hub/cover.png",
    hero: "/work/agile-hub/hero.png",
    context: [
      "East Africa's hospitality industry runs on informal staffing networks.",
      "Agile Hub formalizes the layer between hotels, restaurants, and the workforce that powers them.",
    ],
    approach: [
      "Two-sided marketplace with verified credentialing, shift scheduling, payment rails, and a reputation system that follows workers across employers.",
    ],
    screens: [
      { src: "/work/agile-hub/screen-1.png", span: 12 },
      { src: "/work/agile-hub/screen-2.png", span: 6 },
      { src: "/work/agile-hub/screen-3.png", span: 6 },
    ],
    outcomes: [
      { metric: "1st", label: "East Africa Future Leaders Challenge 2025" },
      { metric: "RCT", label: "Rwanda Chamber of Tourism endorsement" },
    ],
    outcomesNarrative:
      "Won first place at the East Africa Future Leaders Challenge 2025 and earned endorsement from the Rwanda Chamber of Tourism.",
    reflection:
      "The credentialing layer needs to be simpler. I am restructuring it around a single trust score.",
  },
  {
    slug: "stanbic-bank-south-sudan",
    name: "Stanbic Bank, South Sudan",
    tagline:
      "Website redesign for a frontier market banking operation.",
    category: "Web",
    year: 2024,
    featured: true,
    homeLayout: "right",
    role: "Lead Product Designer",
    team: "Ogilvy Africa",
    timeline: "10 weeks",
    stack: ["Figma", "WordPress"],
    cover: "/work/stanbic-bank-south-sudan/cover.png",
    hero: "/work/stanbic-bank-south-sudan/hero.png",
    context: placeholderContext,
    approach: placeholderApproach,
    screens: [
      { src: "/work/stanbic-bank-south-sudan/screen-1.png", span: 12 },
    ],
    outcomes: placeholderOutcomes,
    outcomesNarrative: placeholderNarrative,
    reflection: placeholderReflection,
  },
  {
    slug: "ola-energy",
    name: "Ola Energy",
    tagline:
      "Corporate site and product showcase for a pan-African energy company.",
    category: "Web",
    year: 2024,
    featured: true,
    homeLayout: "left",
    role: "Product Designer",
    team: "Ogilvy Africa",
    timeline: "8 weeks",
    stack: ["Figma", "WordPress"],
    cover: "/work/ola-energy/cover.png",
    hero: "/work/ola-energy/hero.png",
    context: placeholderContext,
    approach: placeholderApproach,
    screens: [{ src: "/work/ola-energy/screen-1.png", span: 12 }],
    outcomes: placeholderOutcomes,
    outcomesNarrative: placeholderNarrative,
    reflection: placeholderReflection,
  },
  {
    slug: "dunkit-nba-africa",
    name: "DunkIt, NBA Africa",
    tagline: "Mobile app design for NBA Africa's fan engagement product.",
    category: "Mobile",
    year: 2023,
    featured: true,
    homeLayout: "right",
    role: "Product Designer",
    team: "Ogilvy Africa",
    timeline: "12 weeks",
    stack: ["Figma", "React Native"],
    cover: "/work/dunkit-nba-africa/cover.png",
    hero: "/work/dunkit-nba-africa/hero.png",
    context: placeholderContext,
    approach: placeholderApproach,
    screens: [{ src: "/work/dunkit-nba-africa/screen-1.png", span: 12 }],
    outcomes: placeholderOutcomes,
    outcomesNarrative: placeholderNarrative,
    reflection: placeholderReflection,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const sorted = [...projects].sort((a, b) => b.year - a.year);
  const index = sorted.findIndex((p) => p.slug === slug);
  if (index === -1 || index === sorted.length - 1) return sorted[0];
  return sorted[index + 1];
}

export const independentProjects = projects.filter(
  (p) => p.category === "Independent"
);

export const clientLogos = [
  "Ogilvy Africa",
  "Stanbic Bank",
  "Ola Energy",
  "NBA Africa",
  "Yellow Pages",
  "Rwanda Chamber of Tourism",
];
