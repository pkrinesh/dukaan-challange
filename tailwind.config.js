/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        light: 'var(--light)',
        dark: 'var(--dark)',

        app: {
          DEFAULT: 'var(--app-bg)',
          fg: 'var(--app-fg)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          fg: 'var(--accent-fg)',
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
        card: {
          DEFAULT: 'var(--card-bg)',
          fg: 'var(--card-fg)',
          'fg-muted': 'var(--card-fg-muted)',
        },
        table: {
          head: {
            DEFAULT: 'var(--table-head-bg)',
            fg: 'var(--table-head-fg)',
          },
          fg: 'var(--table-fg)',
        },
        divider: {
          DEFAULT: 'var(--divider)',
        },
      },
    },
  },
  plugins: [],
}
