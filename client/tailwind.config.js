module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brand: "#3f51b5",
      grey: {
        light: "#D3D3D3",
        medium: "#808080",
      },
      red: "#f44336",
      green: "#50C878",
      white: "#ffffff",
      almostWhite: "#F9F7F5",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
