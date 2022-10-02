// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {},
  },
  // no longer needed with v3 (https://tailwindcss.com/docs/upgrade-guide#configure-content-sources)
  // variants: {
  //   extend: {},
  // },
  plugins: [],
};
