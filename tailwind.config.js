/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        app: {
          DEFAULT: 'var(--app-bg)',
        },
        nav: {
          DEFAULT: 'var(--nav-bg)',
          fg: 'var(--nav-fg)',

          card: {
            DEFAULT: 'var(--nav-card-bg)',
            fg: 'var(--nav-card-fg)',
          },
        },
        border: {
          DEFAULT: 'var(--border)',
        },
        search: {
          DEFAULT: 'var(--search-bg)',
          fg: 'var(--search-fg)',
        },
      },
    },
  },
  plugins: [],
}
