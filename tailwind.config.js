/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      'colors': {
        'yellow-warn': '#FFC107', //#FFC107'
        'green': '#A2C95C',
        'black': '#101010',
        'grey': '#7F7F7F',
        'dark-grey': '#212529',
        'dark-green': '#AAC86B'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs"), require('tailwind-scrollbar'),
  ],
}

