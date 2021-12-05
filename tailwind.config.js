module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // false||'media'||'class'
  theme: {
    extend: {
      fontFamily: {
        // https://tailwindcss.com/docs/font-family#customizing
        sans: [
          'Merriweather'
        ],
      },
      colors: {
        'brand': '#43eaea',
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
