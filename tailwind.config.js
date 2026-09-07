/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B121B",
        panel: "#121B27",
        panel2: "#17222F",
        line: "#25313F",
        muted: "#8B98A9",
        fg: "#EAEEF3",
        amber: {
          DEFAULT: "#E8A33D",
          soft: "#F2C077",
        },
        teal: {
          DEFAULT: "#3FA796",
          soft: "#6FC4B6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1B2532 1px, transparent 1px), linear-gradient(to bottom, #1B2532 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
