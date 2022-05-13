module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bookman': ['Bookman Old Style', 'serif'],
        'cuprum': ['Cuprum', 'serif'],
        'freestyle': ['Freestyle Script', 'serif']
      },
      colors: {
        'milk': '#fff4d4',
        'milk-warm': '#ffe9a8',
        'golden': '#ffe38e',
        'naples': '#ffd862',
        'putty': '#e9ce7d',
        'cold': '#9a9ad9',
        'cold-dark': '#7070D8',
        'black-075': 'rgba(0,0,0,0.75)'
      }
    },
  },
  plugins: [],
}
