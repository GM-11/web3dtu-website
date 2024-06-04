/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        '2': '2',
      },
      transitionTimingFunction: {
        'cubic': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
    },
  },
  plugins: [],
}