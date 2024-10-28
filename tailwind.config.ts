import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        anta: ["Anta", "sans-serif"],
      },
      colors: {
        "bg-color": "#0D0D0D",
        "main-color": "#5E00CE",
        "second-color": "#E8E8E8",
      },
    },
  },
  plugins: [],
};
export default config;
