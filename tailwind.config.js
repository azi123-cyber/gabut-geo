/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        'nusantara': {
          'green': '#2D6A4F',
          'emerald': '#40916C',
          'gold': '#D4AF37',
          'sand': '#F4A261',
          'ocean': '#0077B6'
        }
      }
    },
  },
  plugins: [],
}
