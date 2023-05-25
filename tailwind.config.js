/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ["class", "media", '[data-mode="dark"]'],
  variants: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        foreground: "var(--foreground)",
        border: "var(--border)",
      },
    },
  },
}
