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
      },
      blur: {
        teste: '50px',
      },
      boxShadow: {
        ct: '0 15px 30px rgba(0, 0, 0, 0.3)',
        ct_hover: '0 15px 30px rgba(0, 0, 0, 0.6)',
        album: '0 5px 30px 5px rgba(0, 0, 0, 0.5)',
        album_hover: '0 5px 10px 5px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}
export default config
