export interface ProjectSection {
  heading?: string;
  body: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  featured: boolean;
  client?: string;
  year?: string;
  scope?: string;
  heroHeading?: string;
  intro?: string;
  sections?: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "ola-energy",
    name: "Ola Energy",
    subtitle: "Corporate Site & Products Showcase",
    featured: true,
    client: "Ola Energy",
    year: "2026",
    scope: "Web Design, Prototyping, UX strategy",
    heroHeading: "Fueling Africa",
    intro:
      "OLA Energy is a major pan-African downstream oil and gas company that operates an extensive network of service stations across 17 African countries. Formerly known as OiLibya, the company rebranded to OLA Energy in 2018 to reflect a modern image focused on providing diverse energy solutions and superior customer service, with a goal to keep you going.",
    sections: [
      {
        heading: "Energizing Africa",
        body: "A corporate digital transformation project aimed at modernizing OLA Energy's pan-African presence. The website serves as a high-performance hub for B2C and B2B stakeholders across 17 countries. Key features include an interactive station locator, a B2B portal for lubricants and LPG distribution, and a sustainability dashboard. The design language utilizes bold gradients and a mobile-first architecture to cater to the diverse infrastructure of the African continent.",
      },
      {
        heading: "Rooted in Africa, Driven by Excellence",
        body: "At OLA Energy, we provide more than just a stop along the way; we offer a comprehensive suite of energy solutions designed to power every aspect of African life. Our core is built on high-performance fuels engineered to maximize engine efficiency, complemented by our blending plants that produce premium lubricants and maintain our strategic partnership with Mobil. We understand that the modern motorist requires more than just a refill, which is why our marhaba convenience stores have evolved into community hubs where travelers can refresh and recharge with quality snacks and essential services.",
      },
      {
        heading: "Redefining the Journey: Our Products & Services",
        body: "Beyond the forecourt, we are committed to empowering both businesses and households through innovation and accessibility. Our digital O'Card system offers a seamless, secure way for fleet managers and individuals to track energy consumption in real-time, bridging the gap between traditional fuel and modern fintech. Simultaneously, we are bringing cleaner energy to the heart of the home through our expansive Liquefied Petroleum Gas (LPG) network, ensuring that safe and affordable cooking solutions are available to families across the continent. From the industrial sector to the daily commute, OLA Energy is the silent partner in Africa's relentless momentum.",
      },
    ],
  },
  {
    slug: "walker-town",
    name: "Walker Town",
    subtitle: "Landing Page Design",
    featured: true,
  },
  {
    slug: "pulse-sentiment",
    name: "Pulse Sentiment",
    subtitle: "AI-native sentiment intelligence platform",
    featured: true,
  },
  {
    slug: "stanbic-bank---ssd",
    name: "Stanbic Bank - SSD",
    subtitle: "Website Design for the South Sudan Market",
    featured: true,
  },
  {
    slug: "dunkit",
    name: "DunkIt",
    subtitle: "Mobile App",
    featured: false,
  },
  {
    slug: "mediacommand",
    name: "MediaCommand",
    subtitle: "Cross-channel media operating system",
    featured: false,
  },
  {
    slug: "airtel-money",
    name: "Airtel Money",
    subtitle: "Corporate Website",
    featured: false,
  },
  {
    slug: "honda-kenya",
    name: "Honda Kenya",
    subtitle: "Information Website",
    featured: false,
  },
  {
    slug: "neongage",
    name: "Neongage",
    subtitle: "iGaming CRM platform built for emerging markets.",
    featured: false,
  },
  {
    slug: "crown-paints",
    name: "Crown Paints",
    subtitle: "Corporate Website",
    featured: false,
  },
  {
    slug: "purpose-to-impact",
    name: "Purpose to Impact",
    subtitle: "Website Design / Development",
    featured: false,
  },
  {
    slug: "kijani-flow",
    name: "Kijani Flow",
    subtitle: "Carbon credits exchange built for Africa.",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
}
