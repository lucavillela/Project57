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
        brand: {
          cream: "#F6F2EA", // Seu 'branco'
          purple: "#910074", // Roxo do fundo
          darkPurple: "#6A0055", // Roxo escuro de texto
          green: "#76C066", // Verde
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
