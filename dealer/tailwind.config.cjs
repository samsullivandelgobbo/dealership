/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        hyundai_light: {
          primary: "#e4dcd3",

          secondary: "#032d61",

          accent: "#969594",

          neutral: "#e4dcd3",

          "base-100": "#FFFFFF",

          info: "#a5f3fc",

          success: "#3CE281",

          warning: "#F1C227",

          error: "#E43A4D",
        },
      },
      {
        hyundai_dark: {
          primary: "#e4dcd3",

          secondary: "#032d61",

          accent: "#969594",

          neutral: "#e4dcd3",

          "base-100": "#2D333A",

          info: "#a5f3fc",

          success: "#3CE281",

          warning: "#F1C227",

          error: "#E43A4D",
        },
      },
    ],
  },
}
