/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],  theme: {
    extend: {},
    width: {
      'custom': '50rem', // Adjust the width value as needed
    },  
  },
  plugins: [],
}

