/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        'rose-pink': '#f8e8e8',
        'dusty-rose': '#d4a0a0',
        'warm-brown': '#8b6b6b',
      }
    },
  },
  plugins: [],
}