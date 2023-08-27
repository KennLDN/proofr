/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,vue}",
    ],
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["dracula", "emerald", "black"],
   },
}

