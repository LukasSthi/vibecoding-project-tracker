/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // --- Brand ---
        'brand-primary': '#725CFF',
        'brand-accent': '#DBE2FF',
        'surface-page': '#5C76FF',
        'surface-card': '#344085',
        'text-primary': '#FFFFFF',
        'text-muted': '#E0E0E0',

        // --- Task type (M6 tag-style) ---
        // Note: Overwrote the old emerald/crimson to match your design doc hexes
        'type-feature': '#0000FF', 
        'type-bug': '#B700FF',     

        // --- Due-date states (M8 due-tint) ---
        'due-safe': '#FFB3B3',
        'due-warning': '#FF6E6E',
        'due-overdue': '#3C4D4A',
        'due-neutral': '#C9FFF5',
      },
      fontFamily: {
        // Defines custom utility classes: font-heading, font-body, font-mono
        heading: ['"SST Condensed Bold"', 'sans-serif'],
        sans: ['"SST Light"', 'sans-serif'],
        mono: ['"SST Italic"', 'monospace'],
      },
      boxShadow: {
        'ps-focus': '0 0 15px 2px rgba(255, 255, 255, 0.3)',
      },
      letterSpacing: {
        'widest-ps': '0.2em',
      },
      // ADD THIS FOR THE BACKGROUND ANIMATION
      keyframes: {
        flow: {
          '0%': { transform: 'translateX(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) scaleY(0.9)' },
          '100%': { transform: 'translateX(-50%) scaleY(1)' },
        }
      },
      animation: {
        // We create two speeds so the ribbons overlap naturally
        'ribbon-fast': 'flow 15s linear infinite',
        'ribbon-slow': 'flow 25s linear infinite reverse',
      }
    },
  },
  plugins: [],
};
