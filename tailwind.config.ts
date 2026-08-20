import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "forest-green": {
          DEFAULT: "#01322C",
          50: "#f0faf7",
          100: "#d0f0e7",
          200: "#a1e1cf",
          300: "#5cc9b1",
          400: "#2daa91",
          500: "#148a77",
          600: "#0c6e60",
          700: "#0a574d",
          800: "#093f39",
          900: "#01322C",
          950: "#010f0d",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#e8d08a",
          dark: "#a8891e",
          muted: "#c9a227",
        },
        ivory: {
          DEFAULT: "#F5F5DC",
          50: "#fffff9",
          100: "#fefef0",
          200: "#fcfce0",
          300: "#f9f9cc",
          400: "#f5f5dc",
          500: "#e8e8c8",
        },
        charcoal: {
          DEFAULT: "#2C2C2C",
          light: "#4A4A4A",
          dark: "#1a1a1a",
        },
        cream: "#FAF8F3",
        parchment: "#F2ECD8",
      },
      fontFamily: {
        "noto-serif-bengali": ["var(--font-noto-serif-bengali)", "serif"],
        "noto-sans-bengali": ["var(--font-noto-sans-bengali)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
      },
      boxShadow: {
        "gold": "0 2px 20px rgba(212, 175, 55, 0.15)",
        "gold-lg": "0 4px 40px rgba(212, 175, 55, 0.2)",
        "green": "0 4px 30px rgba(1, 50, 44, 0.15)",
        "premium": "0 20px 60px rgba(0, 0, 0, 0.12)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #e8d08a 50%, #D4AF37 100%)",
        "green-gradient": "linear-gradient(135deg, #01322C 0%, #0a574d 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-right": "fadeRight 0.7s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
