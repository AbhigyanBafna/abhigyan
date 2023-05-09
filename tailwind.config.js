/** @type {import('tailwindcss').Config} */

const myColors = {
  'background': '#111010',
  'pText': '#F5F0F6',
  'pHighlight' : '#FFB938',
  'sHighlight' : '#0267C1',
  'heroCircles': '#808080',
  'cardBg': '#000000',
};

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: myColors,
      fontFamily: {
        'sans': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
