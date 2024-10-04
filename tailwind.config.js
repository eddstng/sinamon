/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      '64convergence': ['Sixtyfour Convergence', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}
