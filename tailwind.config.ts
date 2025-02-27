import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Deep Blue
        secondary: '#047857', // Emerald Green
        accent: '#F97316', // Soft Orange
        background: '#F3F4F6', // Light Gray
        text: '#1F2937', // Charcoal Black
        highlight: '#FACC15', // Warm Yellow
      },
    },
  },
  plugins: [],
} satisfies Config;
