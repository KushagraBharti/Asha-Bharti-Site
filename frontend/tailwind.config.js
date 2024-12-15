export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F8A72',
          light: '#A2D5C6',
          dark: '#3C6A58'
        },
        accent: {
          DEFAULT: '#F2C27B',
          light: '#F8D9B5',
          dark: '#BD945F'
        },
        neutral: {
          light: '#FAFAFA',
          DEFAULT: '#333333',
          dark: '#1A1A1A'
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    }
  },
  plugins: []
};
