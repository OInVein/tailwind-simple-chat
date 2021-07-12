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
        angleBackground: {
          from: {
            borderColor: 'transparent transparent rgb(254, 215, 170) rgb(254, 215, 170)',
          },
          to: {
            borderColor: 'transparent transparent rgb(256, 256, 256) rgb(256, 256, 256)',
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
      },
      animation: {
        wave: 'wave 10s linear infinite',
        chatBackground: 'chatBackground .5s linear forwards',
        angleBackground: 'angleBackground .5s linear forwards',
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
