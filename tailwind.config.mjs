/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          50:  '#F8FAFC',
          100: '#E8EAED',
          200: '#9CA3AF',
          300: '#6B7280',
          400: '#454C5C',
          500: '#262C3B',
          600: '#1F2433',
          700: '#1A1F2B',
          800: '#141925',
          900: '#0B0E14',
        },
        accent: {
          50:  '#EEF2FF',
          100: '#DDE6FF',
          200: '#BCCBFF',
          300: '#9CB1FF',
          400: '#7C9CFF',
          500: '#5C7CFF',
          600: '#4C5E99',
          700: '#3A4878',
          800: '#2A345A',
          900: '#1B2240',
        },
        teal: {
          400: '#5EEAD4',
          500: '#2DD4BF',
        },
        coral: {
          400: '#F78C6C',
          500: '#F97056',
        },
      },
      typography: {
        DEFAULT: { css: { maxWidth: '68ch' } },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    // Use daisyUI's built-in dark theme + override accent colors via CSS
    themes: ['dark'],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};
