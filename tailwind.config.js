/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        kiln: {
          cream: "#F2EBE1",
          navy: "#3C4E7A",
          terracotta: "#B36B4D",
          ochre: "#D9A641",
          sage: "#6B8E6B",
          dark: "#2D2D2D",
          tan: "#E8E2D2",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      screens: {
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
