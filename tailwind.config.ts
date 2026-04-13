import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#363634",
        "primary-fixed-dim": "#d4d5cf",
        "primary-dim": "#b8b9b4",
        "outline-variant": "#5e5e5b",
        outline: "#8f8d8a",
        "on-surface": "#f0eeea",
        background: "#222220",
        "surface-container-lowest": "#1a1a18",
        "on-primary": "#3e413d",
        "primary-container": "#565652",
        "surface-bright": "#424240",
        "on-surface-variant": "#c1c0bc",
        surface: "#222220",
        "primary-fixed": "#e2e3dd",
        secondary: "#9f9e9a",
        "surface-container-low": "#2a2a28",
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
