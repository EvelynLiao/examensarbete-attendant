/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#FFFBFE",
        "surface-container": "#F1EDEC",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F6F3F2",
        "surface-container-highest": "#E5E2E1",

        "on-tertiary-container": "#6B373F",

        "on-surface": "#1C1B1B",
        "on-surface-variant": "#454743",
        primary: "#A62E71",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#FFFFFF",
        secondary: "#625B71",
        "on-secondary": "#FFFFFF",
        error: "#BA1A1A",
        "error-opacity-08": "#B3261E14",

        neutral: "#000000",
        "neutral-60": "#929090",

        "outline-variant": "#C6C7C1",
      },
      fontFamily: {},
      borderRadius: { none: "0", xs: "0.75rem", sm: "1.25rem" },
    },
  },
  plugins: [],
};

