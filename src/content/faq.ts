export interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    number: "01",
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
  },
  {
    number: "02",
    question: "Can you work with my existing brand and designs?",
    answer:
      "Absolutely! I'm experienced in working with established brands. I will ensure all new designs align perfectly with your existing brand identity and style.",
  },
  {
    number: "03",
    question: "What makes your design process unique?",
    answer:
      "My process stands out due to our collaborative approach. I involve you at every stage, ensuring the final product truly reflects your vision while benefiting from my expertise.",
  },
  {
    number: "04",
    question: "Do you offer ongoing support after the project is completed?",
    answer:
      "Yes, I provide post-project support. This includes minor adjustments and answering questions about your new designs for up to 30 days after delivery. If there's a need for longer support, we can discuss a retainer.",
  },
  {
    number: "05",
    question: "How do you handle confidentiality and intellectual property rights?",
    answer:
      "I take confidentiality seriously. All client information and project details are kept strictly confidential. Upon project completion, you'll own full intellectual property rights to the final designs.",
  },
];
