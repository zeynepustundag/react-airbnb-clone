/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'airbnb-red': '#FF385C',
        'faint-text':'#6A6A6A',
      },
      width: {
        '128': '32rem',
        '240':'698px',
      },
    },
  },
  plugins: [],
}

