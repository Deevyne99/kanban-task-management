/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        error: '#EA5555',
        normal: '#000112',
        textLabel: '#828FA3',
      },
      borderColor: {
        error: '#EA5555',
        normal: '#828FA340',
      },
      colors: {
        purple: '#635FC7',
        text: '#828FA3',
        hover: '#A8A4FF',
      },
      backgroundColor: {
        white: '#fff',
        screen: '#F4F7FD',
      },
      fontFamily: {
        Plus: ['Plus Jakarta Sans', 'sans-serif'],
      },
      width: {
        xs: '300px',
        sm: '375px',
      },
    },
  },

  plugins: [],
}
