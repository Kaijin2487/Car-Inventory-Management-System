/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#D9E2FF',
          200: '#B3C5FF',
          300: '#8CA8FF',
          400: '#668BFF',
          500: '#3366FF', // main primary
          600: '#2952CC',
          700: '#1F3D99',
          800: '#142966',
          900: '#0A1433',
        },
        accent: {
          50: '#FFECF2',
          100: '#FFD9E6',
          200: '#FFB3CC',
          300: '#FF8CB3',
          400: '#FF6699',
          500: '#FF3366', // main accent
          600: '#CC2952',
          700: '#991F3D',
          800: '#661429',
          900: '#330A14',
        },
        success: {
          50: '#E6FFF6',
          100: '#CCFFEE',
          200: '#99FFDD',
          300: '#66FFCC',
          400: '#33FFBB',
          500: '#00CC88', // main success
          600: '#00A36D',
          700: '#007A52',
          800: '#005236',
          900: '#00291B',
        },
        warning: {
          50: '#FFF8E6',
          100: '#FFF1CC',
          200: '#FFE399',
          300: '#FFD566',
          400: '#FFC733',
          500: '#FF9900', // main warning
          600: '#CC7A00',
          700: '#995C00',
          800: '#663D00',
          900: '#331F00',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
};