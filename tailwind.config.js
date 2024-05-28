/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-color-v1': '#191A19',
        'red-color-v1': '#C73659',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(.29,.98,.83,.67)',
      },
      animation: {
        'slide-in': 'slideIn 0.3s both',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
