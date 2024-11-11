/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#000',
        light: '#fffbf3',
        'logo-yellow': '#FFCE35',
        'logo-maroon': '#981C20',
        'logo-green': '#346833',
      },
      fontFamily: {
        title: ['"Purna Title"', 'Georgia', 'Cambria', 'serif'],
        'work-sans': [
          '"Work Sans"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        'fira-sans': [
          '"Fira Sans"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        'source-sans': [
          '"Source Sans 3"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1600px',
        },
      },
    },
  },
  plugins: [],
};
