/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      "s-text-default": "#373C4D",
      "s-stroke-light": "#A8ABB4",
      "s-bg-light": "#DDDDDD",
      "s-text-red": "rgb(239 68 68)"
    },
    fontFamily: {
      jura: ["Jura", "sans-serif"],
      segoe: ["Segoe UI Variable", "sans-serif"]
    },
    extend: {}
  },
  plugins: []
}
