/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // include your source files
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // include flowbite-react components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // add the Flowbite plugin
  ],
};
