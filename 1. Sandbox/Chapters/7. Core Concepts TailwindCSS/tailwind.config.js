/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html"],
  theme: {
    extend: {
      animation: {
        "fade": "fade 1s ease-out"
      },
      keyframes: {
        fade: {
          "0%, 100%" : {opacity: 1},
          "50%" : {opacity: 0}
        }
      }
    },
  },
  plugins: [],
}