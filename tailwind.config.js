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
      },
    },
  },
  plugins: [],
}

