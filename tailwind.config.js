module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#FF5722',
        second: '#00B596',
        third: '#D852FF',
        'boom-blue': '#006DF0',
        'boom-blue-rgba': 'rgba(2, 73, 158, .2)',
      },
      fontSize: {
        '2rem': '2rem',
        '3rem': '3rem',
      },
    },
  },
  plugins: [],
};
