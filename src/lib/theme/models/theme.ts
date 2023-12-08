export interface Theme{
  primary:string;
  secondary:string;
  accent:string;
  neutral:string;
  base_100:string;
  base_200:string;
}

const primary = "#24735C";
const secondary = "#BFAC95";
const neutral = "#8C7558";
const accent = "#8B73BF";

export const lightTheme:Theme = {
  primary: primary,
  secondary: secondary,
  neutral: neutral,
  accent: accent,
  base_100: "#D9D9D9",
  base_200: "#EEEEEE"
}

export const darkTheme:Theme = {
  primary: primary,
  secondary: secondary,
  neutral: neutral,
  accent: accent,
  base_100: "#1E1E1E",
  base_200: "#333333"
}

export const xmasTheme:Theme = {
  primary: "#038C3E",
  secondary:"#F2C36B",
  accent: "#F27244",
  neutral: "#BF213E",
  base_100: "#731224",
  base_200: "#BF213E"
}

