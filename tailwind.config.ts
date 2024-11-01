import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pprightGrotesk: ["var(--pprightGrotesk)"],
        ptSansNarrow: ["var(--pt-sans-narrow)"],
        merriweather: ["var(--merriweather)"],
      },
    },
  },
  plugins: [],
};
export default config;
