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
      fontFamily: {
        sans: ["var(--font-sans)", "Segoe UI", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Segoe UI", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef8f4",
          100: "#d5efe4",
          200: "#a8dfc9",
          300: "#6ec9a6",
          400: "#3aad82",
          500: "#1f8f68",
          600: "#167353",
          700: "#125c43",
          800: "#0f4937",
          900: "#0c3c2e",
        },
        sand: {
          50: "#fdf8f0",
          100: "#f8edd9",
          200: "#efd9b0",
          300: "#e4c07e",
          400: "#d9a654",
          500: "#c98f3a",
        },
        ocean: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          900: "#0c4a6e",
        },
        ink: {
          950: "#0a1f1a",
          900: "#0f2e26",
          800: "#163d33",
        },
      },
      boxShadow: {
        lift: "0 4px 24px rgba(10, 31, 26, 0.08), 0 1px 4px rgba(10, 31, 26, 0.04)",
        "lift-lg": "0 12px 48px rgba(10, 31, 26, 0.14), 0 4px 12px rgba(10, 31, 26, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
