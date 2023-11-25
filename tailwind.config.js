/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    // './src/**/*.{html,js}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [
    // require('@tailwindcss/forms'),
      require('preline/plugin'),
      require('flowbite/plugin')
  ],
}

