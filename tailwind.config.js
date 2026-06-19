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
          blue: '#1f6170',
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
        dropdownArrow: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '72%': { opacity: '1', transform: 'translateX(12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        drawerInRtl: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        drawerOutRtl: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(100%)' },
        },
      },
      animation: {
        reveal: 'reveal .75s cubic-bezier(.2,.75,.2,1) both',
        marquee: 'marquee 24s linear infinite',
        ring: 'ring 5.5s linear infinite',
        dropdownArrow: 'dropdownArrow .9s cubic-bezier(.2,.75,.2,1) both',
        fadeIn: 'fadeIn .45s ease-out both',
        fadeOut: 'fadeOut .45s ease-out both',
        drawerInRtl: 'drawerInRtl .72s cubic-bezier(.22,1,.36,1) both',
        drawerOutRtl: 'drawerOutRtl .62s cubic-bezier(.22,1,.36,1) both',
      },
    },
  },
  plugins: [],
};
