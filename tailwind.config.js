module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerHero': "url('./components/assets/grill.jpg')",
        'orderHero': "url('./components/assets/nom.jpg')"
      }
    },
  },
  plugins: [],
}