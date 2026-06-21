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
    themes: [
      {
        pahchin: {
          'primary':         '#7C9CFF',
          'primary-content': '#0B0E14',
          'secondary':       '#5EEAD4',
          'secondary-content': '#0B0E14',
          'accent':          '#F78C6C',
          'accent-content':  '#0B0E14',
          'neutral':         '#1A1F2B',
          'neutral-content': '#E8EAED',
          'base-100':        '#0B0E14',
          'base-200':        '#141925',
          'base-300':        '#1A1F2B',
          'base-content':    '#E8EAED',
          'info':            '#7C9CFF',
          'success':         '#5EEAD4',
          'warning':         '#F78C6C',
          'error':           '#E2615A',
          '--rounded-box':   '0.5rem',
          '--rounded-btn':   '0.375rem',
        },
      },
    ],
    darkTheme: 'pahchin',
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};
