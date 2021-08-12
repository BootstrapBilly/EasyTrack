module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brand: "#3f51b5",
      background: "#f8f0e3",
      grey: {
        light: "#D3D3D3",
        medium: "#808080",
      },
      orange: "#cd8b62",
      red: "#f44336",
      green: "#ACD1AF",
      white: "#ffffff",
      almostWhite: "#F9F7F5",
    },
    extend: {
      height: theme => ({
        "12": "3rem",
        '0': '0',
        '25%': '25%',
        "40%": "40%",
        '50%': '50%',
        "60%": "60%",
        "70%": "70%",
        '75%': '75%',
        "90%": "90%",
        'full': '100%',
      }),
      maxWidth: theme => ({
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
