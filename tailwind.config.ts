import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#141313",
        "surface-dim": "#141313",
        "surface-bright": "#3A3939",
        "surface-container-lowest": "#0E0E0E",
        "surface-container-low": "#1C1B1B",
        "surface-container": "#201F1F",
        "surface-container-high": "#2A2A2A",
        "surface-container-highest": "#353434",
        "surface-variant": "#353434",
        "surface-tint": "#C6C6C7",
        primary: "#FFFFFF",
        "on-primary": "#2F3131",
        "primary-fixed": "#E2E2E2",
        "primary-fixed-dim": "#C6C6C7",
        "primary-container": "#E2E2E2",
        secondary: "#C9C6C5",
        "on-secondary": "#313030",
        "secondary-container": "#4A4949",
        "on-surface": "#E5E2E1",
        "on-surface-variant": "#C4C7C8",
        outline: "#8E9192",
        "outline-variant": "#444748",
        accent: {
          blue: "#3B82F6",
          purple: "#A855F7",
        },
      },
      fontFamily: {
        display: ["Chivo", "system-ui", "sans-serif"],
        headline: ["Chivo", "system-ui", "sans-serif"],
        quote: ["Chivo", "system-ui", "sans-serif"],
        body: ["'Hanken Grotesk'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        "label-technical": ["'JetBrains Mono'", "monospace"],
        "display-xl": ["Chivo", "system-ui", "sans-serif"],
        "headline-lg": ["Chivo", "system-ui", "sans-serif"],
        "quote-editorial": ["Chivo", "system-ui", "sans-serif"],
        "body-md": ["'Hanken Grotesk'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "label-technical": ["13px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
        "quote-editorial": ["24px", { lineHeight: "36px", fontWeight: "300" }],
        "body-md": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "display-xl-mobile": ["56px", { lineHeight: "60px", letterSpacing: "-0.02em", fontWeight: "900" }],
        "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-xl": ["120px", { lineHeight: "110px", letterSpacing: "-0.04em", fontWeight: "900" }],
      },
      spacing: {
        "margin-desktop": "80px",
        "margin-mobile": "24px",
        "stack-lg": "120px",
        gutter: "32px",
        "container-max": "1440px",
      },
      maxWidth: {
        "container-max": "1440px",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "9999px",
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
        "pulse-slow": "pulseSlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scrollLine: "scrollLine 2s ease-in-out infinite",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "0.3", transform: "translateX(-50%) scale(1)" },
          "50%": { opacity: "0.5", transform: "translateX(-50%) scale(1.1)" },
        },
        scrollLine: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(300%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
