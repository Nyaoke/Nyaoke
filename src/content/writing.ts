export interface WritingPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  body: string[];
}

export const writingPosts: WritingPost[] = [
  {
    slug: "how-designers-and-developers-can-actually-collaborate",
    title: "How designers and developers can actually collaborate",
    date: "2025-03-06",
    excerpt:
      "Proven strategies to bridge the designer-developer gap and ship better products faster through real collaboration.",
    readTime: "6 min read",
    body: [
      "The designer-developer gap is not a personality problem. It is a systems problem. When handoffs happen over Slack screenshots and Figma links with no context, both sides lose. I have spent years on both sides of this line, and the teams that ship fastest share one habit: they make decisions together, early, with enough specificity that nobody has to guess.",
      "Start with a shared definition of done. Not \"pixel perfect\" but \"this component handles empty, loading, error, and success states with these exact copy strings.\" Write it in the ticket. Review it in a 15-minute sync before anyone opens a code editor. The cost of that meeting is always less than the cost of a rework cycle.",
      "Use the design system as the contract. When I maintained a 120+ component library at Yellow Pages, the argument shifted from \"is this right?\" to \"which variant do we use?\" That is a much better argument to have. Developers stop improvising UI. Designers stop designing one-off solutions that never ship.",
      "Finally, sit together for the hard parts. Not every screen needs a pairing session, but navigation patterns, form validation, and anything with real-time data benefit from 30 minutes of shared screen time. The goal is not agreement on everything. The goal is fewer surprises on demo day.",
    ],
  },
  {
    slug: "why-faster-isnt-always-better",
    title: "Why faster isn't always better",
    date: "2025-04-22",
    excerpt:
      "Speed is a useful constraint until it becomes the only constraint. On knowing when to slow down.",
    readTime: "5 min read",
    body: [
      "Every product team I have worked with celebrates velocity. Ship fast, learn fast, iterate fast. I agree with most of that. But I have also watched teams move so quickly that they optimize the wrong thing three times in a row, each iteration polished and each one missing the actual user need.",
      "The fintech onboarding project that earned my promotion to PM is a useful example. We could have shipped a faster flow in week one. Instead, we spent two weeks in discovery: watching session recordings, mapping drop-off points, interviewing users who abandoned at step three. The insight was not visual. It was that users did not understand why we needed certain documents. One copy change and a progress indicator moved drop-off from 38% to 17%.",
      "Slowing down is not the same as being cautious. Cautious teams avoid decisions. Slow teams make better decisions because they have better inputs. The difference shows up in what you measure: cautious teams track output, slow teams track outcomes.",
      "I apply the same thinking to my independent products. MediaCommand has twenty modules because I mapped every workflow first. The next version will have six, because I now know which six earn the most time back per week. That knowledge only came from building slowly enough to observe real usage.",
    ],
  },
  {
    slug: "designing-for-human-connection",
    title: "Designing for human connection",
    date: "2025-04-01",
    excerpt:
      "Digital products succeed when they respect the social context they operate in. A note on designing for East African users.",
    readTime: "7 min read",
    body: [
      "Most design advice assumes a user who sits alone at a desk, focused, with reliable internet and a single language preference. That is not how most of my users in Kenya experience digital products. They share phones. They code-switch between English and Swahili mid-sentence. They complete transactions in noisy environments with intermittent connectivity.",
      "Designing for human connection means designing for these realities, not around them. When I built Pulse, the NLP layer had to understand Sheng, not just Swahili. When I built Kijani Flow, the interface needed to work in eight languages including right-to-left scripts, because carbon markets cross borders and regulatory contexts.",
      "Connection also means trust. Agile Hub's credentialing system exists because hospitality workers in East Africa move between employers frequently, and their reputation should follow them. The product is not just a scheduling tool. It is infrastructure for a labor market that has always operated informally.",
      "The best compliment I have received on a product was not about the UI. It was a hotel manager in Kigali saying Agile Hub made hiring feel fair for the first time. That is the standard I design toward: products that earn trust by respecting how people actually live and work.",
    ],
  },
];

export function getPost(slug: string): WritingPost | undefined {
  return writingPosts.find((p) => p.slug === slug);
}

export function getSortedPosts(): WritingPost[] {
  return [...writingPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
