primary = "#0798F2";
secondary = "#FF5F91";
neutral = "#3d4451";

//dark
darkBg = "#171B26";
darkBg2 = "#1C3659";

//light
lightBg = "#F9FAFB";
lightBg2 = "#E5E7EB";



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
          '--base-200': darkBg2,
        },
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          'primary': primary,
          'secondary': secondary,
          'accent': darkBg,
          'neutral': neutral,
          'base-100': lightBg,
          '--base-200': lightBg2,
        }
      }
    ]
  }
};

