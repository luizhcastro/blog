import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        italic: ["var(--font-italic)"],
      },
    },
  },
  plugins: [],
};

export default config;
