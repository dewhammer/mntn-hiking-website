import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FBD784',
        dark: '#0B1D26',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2070&auto=format&fit=crop')",
        'gradient-overlay': 'linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 100%)',
      },
      fontFamily: {
        chronicle: ['Chronicle Display', 'serif'],
        gilroy: ['Gilroy', 'sans-serif'],
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [],
}

export default config 