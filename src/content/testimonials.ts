export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const featuredTestimonial: Testimonial = {
  quote:
    "What stood out most was Ted's ability to balance design with functionality. He helped us build a platform that looks amazing and works effortlessly for our users. His professionalism and responsiveness gave us confidence every step of the way.",
  name: "Michael Karanja",
  role: "Project Coordinator, Helkinen Enterprises",
  avatar: "/images/avatar-michael.png",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Ted was an absolute pleasure. He took time to understand our needs and translated them into a clean, modern, and highly functional website. The project was delivered on time, and the attention to detail was remarkable.",
    name: "Timothy Chege",
    role: "CFO, Daraja Capital",
    avatar: "/images/avatar-timothy.png",
  },
  {
    quote:
      "Ted brought both creativity and technical expertise to our project. He not only delivered a visually appealing design but also ensured the site performed seamlessly across devices.",
    name: "Anvil Ondiwo",
    role: "CO-Founder, Ankil Solutions",
    avatar: "/images/avatar-anvil.png",
  },
  {
    quote:
      "We were impressed by Ted's ability to quickly grasp our vision and turn it into a digital solution that exceeded our expectations. From user experience to performance optimization, everything was executed with precision.",
    name: "Flora Nyoro",
    role: "Marketing Associate, Honda Kenya",
    avatar: "/images/avatar-flora.png",
  },
];
