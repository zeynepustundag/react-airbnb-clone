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
        'search-bg':'#dddddd',
      },
      width: {
        '128': '32rem',
        '240':'698px',
        'search-width':'800px',
        'menu-width':'26rem',
      },
      height:{
        'menu-height':'26rem',
      },
      boxShadow: {
        'menu-shadow': '0px 3px 12px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

