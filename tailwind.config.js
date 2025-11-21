/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F3EA",
        primary: "#0F1C2E",
        secondary: "#F2E5D4",
        accent: "#C8641B",
        brandTeal: "#1A8A89",
        cream: "#FFF9EF",
        charcoal: "#2B2F3A",
      },
    },
  },
  plugins: [],
};
