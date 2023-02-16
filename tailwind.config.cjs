/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors: {
        background: 'rgb(24, 24, 34)',
        strongBlue: '#3D5A80',
        mainColor: 'rgb(16, 41, 76)',
        btnPrimary: 'linear-gradient(90deg, rgba(42,42,59,1) 33%, rgba(78,119,143,1) 70%)'
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
};
