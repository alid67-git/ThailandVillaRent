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
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        sand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
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
          700: "#1e4a3f",
        },
        neutral: {
          50: "#f8faf9",
          100: "#f1f5f4",
          200: "#e2e8e6",
          300: "#cbd5d1",
          400: "#94a89f",
          500: "#6b7f76",
          600: "#4d6359",
          700: "#354a42",
          800: "#22352e",
          900: "#142420",
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
