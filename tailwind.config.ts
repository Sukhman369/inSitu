import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        insitu: {
          green: "var(--insitu-primary, #008000)",
          "green-hover": "var(--insitu-primary-hover, #006400)",
          "green-light": "var(--insitu-primary-light, #EBF6EB)",
          "green-subtle": "var(--insitu-primary-subtle, rgba(0, 128, 0, 0.08))",
          canvas: "var(--insitu-canvas, #FBF9F5)",
          sand: "var(--insitu-sand, #F5F1E8)",
          ecru: "var(--insitu-ecru, #EFE9DD)",
          cream: "var(--insitu-cream, #FAF8F3)",
          border: "var(--insitu-border, #EAE4D7)",
          "border-dark": "var(--insitu-border-dark, #D8D0BF)",
          charcoal: "var(--insitu-charcoal, #1A1A1A)",
          muted: "var(--insitu-muted, #66625D)",
          lightMuted: "var(--insitu-light-muted, #8F8A82)",
        },
        snoov: {
          green: "var(--insitu-primary, #008000)",
          "green-hover": "var(--insitu-primary-hover, #006400)",
          "green-light": "var(--insitu-primary-light, #EBF6EB)",
          "green-subtle": "var(--insitu-primary-subtle, rgba(0, 128, 0, 0.08))",
          canvas: "var(--insitu-canvas, #FBF9F5)",
          sand: "var(--insitu-sand, #F5F1E8)",
          ecru: "var(--insitu-ecru, #EFE9DD)",
          cream: "var(--insitu-cream, #FAF8F3)",
          border: "var(--insitu-border, #EAE4D7)",
          "border-dark": "var(--insitu-border-dark, #D8D0BF)",
          charcoal: "var(--insitu-charcoal, #1A1A1A)",
          muted: "var(--insitu-muted, #66625D)",
          lightMuted: "var(--insitu-light-muted, #8F8A82)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: [
          "var(--font-jakarta)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        editorial: "0.15em",
        "widest-plus": "0.25em",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
}

export default config
