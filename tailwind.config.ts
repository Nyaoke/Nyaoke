import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        rc: {
          text: "#0F0F0F",
          muted: "#737373",
          border: "#E5E5E5",
          hover: "#F5F5F5",
          yellow: "#FACC15",
        },
      },
    },
  },
  plugins: [],
};

export default config;
