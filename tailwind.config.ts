import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: '#f5a623',
        clay: '#8b5e3c',
        cream: '#f8f1e7'
      },
      boxShadow: {
        glow: '0 0 30px rgba(245,166,35,0.35)'
      },
      backgroundImage: {
        chai: 'radial-gradient(circle at 20% 20%, rgba(245,166,35,0.25), transparent 45%), radial-gradient(circle at 80% 10%, rgba(139,94,60,0.35), transparent 45%), linear-gradient(140deg,#121212,#24170f 55%,#3a2417)'
      }
    }
  },
  plugins: []
} satisfies Config;
