const tailwindColors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: tailwindColors.orange,
      },
      minHeight: {
        15: '3.75rem',
      },
      height: {
        11.5: '2.875rem',
      },
      width: {
        11.5: '2.875rem',
      },
      padding: {
        19: '5rem',
      },
      keyframes: {
        wave: {
          from: {
            transform: 'translate(0%, 0%) rotate(0deg)',
          },
          to: {
            transform: 'translate(0%, 0%) rotate(360deg)',
          },
        },
        chatBackground: {
          from: {
            backgroundColor: 'rgb(254, 215, 170)',
          },
          to: {
            backgroundColor: 'rgb(256, 256, 256)',
          },
        },
        shake: {
          '0%': {
            transform: 'rotate(-3deg)',
          },
          '20%': {
            transform: 'rotate(3deg)',
          },
          '40%': {
            transform: 'rotate(-2deg)',
          },
          '60%': {
            transform: 'rotate(2deg)',
          },
          '80%': {
            transform: 'rotate(-1deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
        typing: {
          from: {
            width: 0,
          },
          to: {
            width: '100%',
          },
        },
        slideFromLeft: {
          from: {
            marginLeft: '-20px',
            opacity: '0',
          },
          to: {
            marginLeft: '0',
            opacity: '1',
          },
        },
        rotate360: {
          from: {
            transform: 'rotate(0deg)',
            opacity: '.6',
          },
          to: {
            transform: 'rotate(360deg)',
            opacity: '1',
          },
        },
      },
      animation: {
        wave: 'wave 10s linear infinite',
        chatBackground: 'chatBackground .5s linear forwards',
        shake: 'shake .5s linear forwards',
        slideFromLeft: 'slideFromLeft .5s linear forwards',
        rotate360: 'rotate360 3s linear infinite',
        ['typing-1500']: 'typing 1.5s steps(44, end)',
        ['typing-3000']: 'typing 3s steps(44, end)',
      },
      scale: {
        102: '1.02',
      }
    },
  },
  variants: {},
  plugins: [
  ],
}
