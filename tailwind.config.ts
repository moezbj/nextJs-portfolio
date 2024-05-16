import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        title: "#9f9f9f76",
        text: "#f3f3f3",
        white: "#fff",
        secondaryText: "#9f9f9f",
        green: "#009e66",
        grey:"#161616",
        bg: "#101010",
      },
      fontSize: {
        standard: "14px",
        links: "16px",
        md: "16px",
        lg: "20px",
        medium: "24px",
        xl: "26px",
        bigTitle: "36px",
        bigTitle1: "48px",
      },
    },
  },
  plugins: [],
};
export default config;
