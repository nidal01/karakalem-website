import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#1f201e",
        "primary-fixed-dim": "#d4d5cf",
        "primary-dim": "#b8b9b4",
        "outline-variant": "#484845",
        outline: "#767572",
        "on-surface": "#e7e5e1",
        background: "#0e0e0d",
        "surface-container-lowest": "#000000",
        "on-primary": "#3e413d",
        "primary-container": "#454743",
        "surface-bright": "#2c2c29",
        "on-surface-variant": "#acaba7",
        surface: "#0e0e0d",
        "primary-fixed": "#e2e3dd",
        secondary: "#9f9e9a",
        "surface-container-low": "#131312",
        tertiary: "#e9ffeb",
        primary: "#c6c7c1",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      fontFamily: {
        headline: ["var(--font-newsreader)", "Georgia", "serif"],
        body: ["var(--font-newsreader)", "Georgia", "serif"],
        label: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
