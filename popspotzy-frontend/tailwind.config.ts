import type { Config } from 'tailwindcss'
// import daisyui from 'daisyui';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#6E45E2',
          600: '#5b21b6',
        }
      },
      animation: {
        'blob': 'blob 8s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(40px, -60px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-30px, 30px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        }
      }
    },
  },
  plugins: [
    // daisyui
  ],
}
export default config
