import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light_purple: '#f1eaff', //custom background colour
},
},
},
  plugins: [],
}

export default config;
