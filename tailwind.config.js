/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/templates/**/*.html',
    './src/js/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    colors: {
      darkGreen: '#2A5831',
      lightGreen: '#76B947',
      lightTextGrey: '#F2F2F2',
      darkTextGrey: '#333333',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      play: ['Play', 'sans-serif'],
    },
    backgroundImage: {
      'custom-gradient':
        'linear-gradient(180deg, #2F5233 0%, #3B6041 36.65%, #568162 84.5%, #6C9B7C 100%)',
    },
  },
  plugins: [require('flowbite/plugin')],
};
