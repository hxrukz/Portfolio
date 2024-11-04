/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoflex: ["Roboto Flex", "sans-serif"]
      },
      colors: {
        "primary-1": "#2d4865",
        "primary-2": "#3e5977",
        "primary-3": "#4f6988",
        "primary-4": "#607a9a",
        "primary-5": "#718aab",
      }
    },
  },
  plugins: [],
}

