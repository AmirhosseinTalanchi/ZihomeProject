/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iranyakan: ['iranyekan', 'sans-serif'],
      },
      colors: {
        Neutral9: '#292C2D', 
        Neutral3: '#C2C5C6', 
        Neutral1: '#E1E2E3', 
      },
    },
  },
  plugins: [],
}

