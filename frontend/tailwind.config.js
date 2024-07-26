/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDelay:{
        '10000': '10000ms'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        animation: {
          fadeIn: 'fadeIn 1s ease-in-out',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        leagueGothic: ['League Gothic', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', {
          lineHeight: '2.75rem',
        }],
        'h1-md': ['2.25rem', {
          lineHeight: '2.75rem',
        }],
        'h1-sm': ['2rem', {
          lineHeight: '2.75rem',
        }],
        'h1-xsm': ['1.25rem', {
          lineHeight: '2.75rem',
        }],
        'h2': ['1.25rem', {
          lineHeight: '2.85rem',
        }],
        'h3': ['1.15rem', {
          lineHeight: '2.4rem',
        }],
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
        'black': 900,
      },
      scale: {
        '25': '0.25',
        '35': '0.35',
        '45': '0.45',
      },
    },
    screens: {
      'xsm': {'max': '639px'},
      // => @media (max-width: 768px) { ... }
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
  mode: 'jit',
}

