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
        body: ['"SST Light"', 'sans-serif'],
        mono: ['"SST Italic"', 'monospace'],
      },
      boxShadow: {
        // The console "Active Glow" focus ring (used via shadow-ps-focus)
        'ps-focus': '0 0 15px 2px rgba(255, 255, 255, 0.3)',
      },
      letterSpacing: {
        // The heavy tracking for the logo wordmark (used via tracking-widest-ps)
        'widest-ps': '0.2em',
      }
    },
  },
  plugins: [],
};
