/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FAFAF8',
        },
        surface: {
          DEFAULT: '#F2F0EC',
          hover: '#EAE7E1',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#6B6B6B',
          tertiary: '#999999',
        },
        accent: {
          DEFAULT: '#8B6914',
          hover: '#A37D1C',
          light: 'rgba(139, 105, 20, 0.08)',
        },
        border: {
          DEFAULT: 'rgba(26, 26, 26, 0.08)',
          strong: 'rgba(26, 26, 26, 0.15)',
        },
        semantic: {
          success: '#2D8F3C',
          warning: '#B8860B',
          error: '#C53030',
          info: '#2B6CB0',
        },
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
