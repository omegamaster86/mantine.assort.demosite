import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient': 'from-purple-500 to-pink-500',
      },
      colors: {
        'regal-red': '#f03e3e',
        'regal-purple': '#ae3ec9',
        'regal-pink': '#ff8787',
      },
    },
    fontFamily: {
      'greycliff': ['Greycliff','CF'],
    },
  },
  plugins: [],
}
export default config
