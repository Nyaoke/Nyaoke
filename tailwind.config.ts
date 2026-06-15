import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg-canvas)",
        elevated: "var(--bg-elevated)",
        subtle: "var(--bg-subtle)",
        ink: {
          primary: "var(--ink-primary)",
          secondary: "var(--ink-secondary)",
          tertiary: "var(--ink-tertiary)",
          quaternary: "var(--ink-quaternary)",
        },
        border: {
          DEFAULT: "var(--border-default)",
          strong: "var(--border-strong)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
        },
        signal: {
          warning: "var(--signal-warning)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3.5rem, 8vw, 6.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5vw, 4rem)",
          { lineHeight: "1", letterSpacing: "-0.025em" },
        ],
        h1: [
          "clamp(2rem, 4vw, 3rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        h2: [
          "clamp(1.5rem, 2.5vw, 2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.015em" },
        ],
        h3: ["1.25rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.55" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        caption: ["0.8125rem", { lineHeight: "1.5" }],
        "mono-label": [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.08em" },
        ],
      },
      borderRadius: {
        input: "6px",
        card: "12px",
        image: "20px",
        pill: "999px",
      },
      maxWidth: {
        content: "1280px",
        "content-wide": "1440px",
      },
      spacing: {
        section: "96px",
        "section-lg": "144px",
      },
      padding: {
        gutter: "24px",
        "gutter-md": "48px",
        "gutter-lg": "80px",
      },
      boxShadow: {
        modal: "0 24px 48px -12px rgba(14, 14, 12, 0.16)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      transitionDuration: {
        hover: "200ms",
        entrance: "400ms",
        orchestrated: "600ms",
      },
    },
  },
  plugins: [],
};

export default config;
