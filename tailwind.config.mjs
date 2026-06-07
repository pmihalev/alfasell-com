/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // AlfaSell brand palette — source of truth: milex-modern/.../lib/brand.ts
        brand: {
          royal: '#5B21B6',
          deep: '#1e0a3c',
          vivid: '#7C3AED',
          light: '#f5f0ff',
          gold: '#C9A84C',
          'gold-dark': '#b8973e',
        },
        // Page background — slightly deeper than `deep` for richer gradients.
        ink: '#0d0520',
      },
      fontFamily: {
        // Syne for display headings; system sans for body.
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        '6xl': '72rem',
        '7xl': '80rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
