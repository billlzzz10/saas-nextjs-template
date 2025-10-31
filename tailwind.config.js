/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        iosBlue: '#007AFF',
        iosGray: '#F9F9F9',
        iosBorder: '#E5E5EA',
        iosText: '#1C1C1E',
        iosSecondary: '#8E8E93',
      },
    },
  },
  plugins: [],
}
