primary = "#24735C";
secondary = "#BFAC95";
neutral = "#8C7558";

//dark
darkBg = "#1E1E1E";
darkBg2 = "#2A2A2A"

//light
lightBg = "#D9D9D9";



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          'primary': primary,
          'secondary': secondary,
          'accent': lightBg,
          'neutral': neutral,
          'base-100': darkBg,
          'base-200': darkBg2,
        },
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          'primary': primary,
          'secondary': secondary,
          'accent': darkBg,
          'neutral': neutral,
          'base-100': lightBg,
        }
      }
    ]
  }
};

