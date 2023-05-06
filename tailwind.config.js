/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", "media", '[data-mode="dark"]'],
  variants: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd"],
  theme: {
    extend: {
      colors: {},
    },
  },
}
