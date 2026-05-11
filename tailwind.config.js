/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:    '#080B14',
        card:    '#0D1121',
        primary: '#6C63FF',
        soft:    '#818CF8',
      }
    },
  },
  plugins: [],
}