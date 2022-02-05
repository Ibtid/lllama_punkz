module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      lightGreen: '#2cd014',
      deepGreen: '#092e36',
      deepOrange: '#c05a00',
      white: '#fefefe',
      black: '#121212',
      midnightBlack: '#0f0e0b',
    },
    extend: {
      fontFamily: { Roboto: ['Roboto', 'sans-serif'] },
    },
  },
  plugins: [],
};
