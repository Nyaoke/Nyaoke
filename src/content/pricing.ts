export interface PricingStep {
  title: string;
  body: string;
}

export interface PricingCard {
  title: string;
  body: string;
  priceLabel?: string;
  price?: string;
  features: string[];
  cta: { label: string; href: string };
}

export const pricingSteps: PricingStep[] = [
  {
    title: "Discovery Call",
    body: "Book a discovery call to discuss your project needs and objectives.",
  },
  {
    title: "Request",
    body: "Request whatever service I offer, from web design to web & App development.",
  },
  {
    title: "Receive",
    body: "Receive your design within 10-12 days on average.",
  },
];

export const pricingSupporting = [
  "Custom design services for brands who move fast.",
  "Subscription design services for brands who move fast.",
];

export const pricingCards: PricingCard[] = [
  {
    title: "Minimalist - Modern Design",
    body: "Service rate for your design requests. Ideal for new & ongoing design requirements.",
    priceLabel: "Investment Starts From",
    price: "$2,500",
    features: [
      "Multiple Brands under one plan",
      "Upto 5 revisions",
      "Avg 1 Month turnaround",
      "Figma ready Designs",
    ],
    cta: { label: "Get Started", href: "/projects" },
  },
  {
    title: "For Your Next Project",
    body: "Comprehensive design services for any project scope. Ideal for one-time design needs or individual tasks.",
    features: [
      "Clearly defined scope",
      "Fixed timeline",
      "5 revision rounds",
      "Milestone updates",
    ],
    cta: { label: "Get quote", href: "https://cal.com/ted-nyaoke-5ahdth" },
  },
];
