/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#050510',
        surface: {
          DEFAULT: '#0C0E1A',
          hover: '#141728',
        },
        primary: '#E8ECF4',
        secondary: '#7A8294',
        muted: '#4D5466',
        bronze: {
          DEFAULT: '#5B8DEF',
          hover: '#7BA4F5',
          light: 'rgba(91, 141, 239, 0.06)',
        },
        accent: '#5B8DEF',
        rule: {
          DEFAULT: 'rgba(255, 255, 255, 0.06)',
          strong: 'rgba(255, 255, 255, 0.12)',
        },
        dark: '#000000',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['96px', { lineHeight: '1.1' }],
        'hero-mobile': ['48px', { lineHeight: '1.1' }],
        'h1': ['48px', { lineHeight: '1.2' }],
        'h2': ['38px', { lineHeight: '1.25' }],
        'h3': ['30px', { lineHeight: '1.3' }],
        'body': ['18px', { lineHeight: '1.6' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.2em' }],
      },
      maxWidth: {
        'content': '1200px',
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
        'lg': '8px',
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
