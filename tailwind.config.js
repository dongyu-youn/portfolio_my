/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#337ab7',
          success: '#5cb85c',
          info: '#5bc0de',
          warning: '#f0ad4e',
          danger: '#d9534f',
        },
        gray: {
          light: '#f5f5f5',
          DEFAULT: '#777',
          dark: '#333',
        },
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '30px',
        '3xl': '36px',
      },
      maxWidth: {
        lg: '65rem',
        '2xl': '75rem',
      },
      keyframes: {
        excavator: {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(20vw) rotate(2deg)' },
          '50%': { transform: 'translateX(40vw) rotate(-2deg)' },
          '75%': { transform: 'translateX(60vw) rotate(2deg)' },
          '100%': { transform: 'translateX(120vw) rotate(0deg)' },
        },
      },
      animation: {
        excavator: 'excavator 15s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};
