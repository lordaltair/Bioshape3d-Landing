/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      colors: {
        spring: {
          ink: '#242427',
          charcoal: '#303033',
          muted: '#b4b5ba',
          line: '#e5e5e7',
          blue: '#3180e0',
          paper: '#f7f7f8',
        },
      },
      boxShadow: {
        spring: '0 18px 60px rgba(0, 0, 0, 0.14)',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(34px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ring: {
          '0%': { strokeDashoffset: '126' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        reveal: 'reveal .75s cubic-bezier(.2,.75,.2,1) both',
        marquee: 'marquee 24s linear infinite',
        ring: 'ring 2.6s linear infinite',
      },
    },
  },
  plugins: [],
};
