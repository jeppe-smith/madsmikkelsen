/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        void: "#10161B",
      },
      maxWidth: {
        3xl: '1920px'
      }
    },
  },
  plugins: [],
};
