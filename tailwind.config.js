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
          green: '#008000',
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
        waterDrop: {
          '0%': {
            transform: 'translate(-50%, 0) scale(0)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'translate(-50%, 0) scale(1.2)',
            opacity: '0.2',
          },
          '100%': {
            transform: 'translate(-50%, 0) scale(2)',
            opacity: '0',
          },
        },
        pulse: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 0.3 },
        },
      },
      screens: {
        sm: '20rem', // 320px
        md: '48rem', // 768px
        lg: '64rem', // 1024px
        xl: '95rem', // 1520px
        '2xl': '110rem', // 1760px
      },
      animation: {
        excavator: 'excavator 15s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        waterDrop: 'waterDrop 1s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
