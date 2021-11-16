module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // https://tailwindcss.com/docs/font-family#customizing
        sans: [
          'Merriweather'
        ],
      },
      colors: {
        'brand': '#2EFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
