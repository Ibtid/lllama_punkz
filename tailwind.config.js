module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      lightGreen: '#2cd014',
      deepGreen: '#082f36',
      deepOrange: '#c05a00',
      white: '#fefefe',
      black: '#121212',
      midnightBlack: '#0f0e0b',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/assests/images/background.png')",
      },
    },
  },
  plugins: [],
};
