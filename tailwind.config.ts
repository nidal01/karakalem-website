import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#2e2e2c",
        "primary-fixed-dim": "#d4d5cf",
        "primary-dim": "#b8b9b4",
        "outline-variant": "#545451",
        outline: "#82807c",
        "on-surface": "#ebe9e4",
        background: "#1a1a18",
        "surface-container-lowest": "#121211",
        "on-primary": "#3e413d",
        "primary-container": "#4f4f4c",
        "surface-bright": "#3a3a37",
        "on-surface-variant": "#b8b7b3",
        surface: "#1a1a18",
        "primary-fixed": "#e2e3dd",
        secondary: "#9f9e9a",
        "surface-container-low": "#222220",
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
