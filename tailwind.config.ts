import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue-light": "#265E99",
        "custom-blue-normal": "#033F87",
        "custom-blue-dark": "#142D57",
        "gray":"#909090"
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(to right, #265E99, #142D57)",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [],
};
export default config;
