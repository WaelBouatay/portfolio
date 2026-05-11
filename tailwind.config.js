/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        card: '#111111',
        gold: '#C9A96E',
        cream: '#E8E2D9',
      }
    },
  },
  plugins: [],
}