/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        error: '#EA5555',
        normal: '#000112',
      },
      borderColor: {
        error: '#EA5555',
        normal: '#828FA340',
      },
    },
  },
  plugins: [],
}
