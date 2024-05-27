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
    },
  },
  plugins: [],
}
