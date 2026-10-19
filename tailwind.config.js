/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bengali: ['"Noto Sans Bengali"', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        navy: {
          800: '#1e3a8a',
          900: '#0f172a',
        },
        emerald: {
          800: '#065f46',
          900: '#064e3b',
        }
      }
    },
  },
  plugins: [],
}