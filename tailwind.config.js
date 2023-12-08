import {lightTheme, darkTheme, xmasTheme} from "./src/lib/theme/models/theme";

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
          'primary': darkTheme.primary,
          'secondary': darkTheme.secondary,
          'accent': darkTheme.accent,
          'neutral': darkTheme.neutral,
          'base-100': darkTheme.base_100,
          'base-200': darkTheme.base_200
        },
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          'primary': lightTheme.primary,
          'secondary': lightTheme.secondary,
          'accent': lightTheme.accent,
          'neutral': lightTheme.neutral,
          'base-100': lightTheme.base_100,
          'base-200': lightTheme.base_200
        },
        xmas: {
          ...require("daisyui/src/theming/themes")["dark"],
          'primary': xmasTheme.primary,
          'secondary': xmasTheme.secondary,
          'accent': xmasTheme.accent,
          'neutral': xmasTheme.neutral,
          'base-100': xmasTheme.base_100,
          'base-200': xmasTheme.base_200
        }
      }
    ]
  }
};

