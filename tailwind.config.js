/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-space': '#000411',
        'midnight': '#160C28',
        'gold': '#EFCB68',
        'frost': '#E1EFE6',
        'ash': '#AEB7B3',
      },
      fontFamily: {
        'grotesk': ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
