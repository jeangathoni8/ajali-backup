/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ajaliRed: "#d91d24",
        ajaliBlack: "#000000",
        ajaliWhite: "#ffffff",
      },
    },
  },
  plugins: [],
}

