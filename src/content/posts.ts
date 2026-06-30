export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "how-designers-and-developers-can-actually-collaborate",
    title: "How designers and developers can actually collaborate.",
    date: "Mar 6, 2025",
    author: "By Ted Nyaoke",
    excerpt:
      "Discover proven strategies to bridge the designer-developer gap. Learn how top teams eliminate handoff friction and ship better products faster through true collaboration.",
    body: [
      "The gap between design and engineering is rarely about talent. It is about shared context. When designers and developers operate from different sources of truth, friction shows up as rework, missed states, and late-stage surprises that could have been caught in a fifteen minute conversation.",
      "The teams that ship fastest treat the design system as a contract. Components have defined states, tokens are named once and reused everywhere, and the argument shifts from is this right to which variant do we use. That is a far more productive conversation.",
      "Bring engineering into design reviews early, and bring design into technical planning. The handoff stops being a wall to throw work over and becomes a continuous loop where both sides shape the outcome together.",
    ],
  },
  {
    slug: "why-faster-isn-t-always-better",
    title: "Why faster isn't always better.",
    date: "Apr 22, 2025",
    author: "By Ted Nyaoke",
    excerpt:
      "Speed is a useful constraint until it becomes the only constraint. A look at when slowing down produces better product decisions.",
    body: [
      "Every team celebrates velocity. Ship fast, learn fast, iterate fast. Most of that is good advice. But velocity without direction just means you arrive at the wrong destination sooner.",
      "The work that earned my promotion was not the fastest path. We spent two weeks watching real users abandon an onboarding flow before we changed a single pixel. The insight was not visual, it was that people did not understand why we asked for certain information.",
      "Slowing down is not the same as being cautious. Better inputs produce better decisions, and the difference shows up in what you choose to measure: output, or outcome.",
    ],
  },
  {
    slug: "designing-for-human-connection",
    title: "Designing for human connection.",
    date: "Apr 1, 2025",
    author: "By Ted Nyaoke",
    excerpt:
      "Products succeed when they respect the social context they operate in. Notes on designing for real people in real environments.",
    body: [
      "Most design advice assumes a user sitting alone at a desk with fast internet and a single language. That is not how most people in the markets I design for actually live. They share devices, switch languages mid sentence, and complete tasks in noisy, low bandwidth conditions.",
      "Designing for human connection means designing for those realities rather than around them. It means interfaces that degrade gracefully, copy that respects how people actually speak, and trust built into the structure of the product.",
      "The best compliment I have received was not about an interface. It was someone telling me a product made a process feel fair for the first time. That is the standard worth designing toward.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
