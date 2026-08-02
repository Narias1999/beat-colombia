import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // BEAT brand palette (sampled from beatcyclingclub.com)
        teal: {
          DEFAULT: '#07726F', // deep teal used for the hero card & primary buttons
          dark: '#055a58',
          mint: '#28BEBE', // bright accent used for the "Join" CTA
        },
        ink: '#333333',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '18px',
      },
      maxWidth: {
        site: '1360px',
      },
    },
  },
  plugins: [],
};

export default config;
