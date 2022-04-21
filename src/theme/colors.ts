import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ffb342",
  primaryBright: "#ffb342",
  primaryDark: "#ffb342",
  secondary: "#0e0c0c",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#2cafff",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#009eff",
  input: "#eeeaf4",
  tertiary: "#3eb6ff",
  text: "#fdc947",
  textDisabled: "#BDC2C4",
  textSubtle: "#ffffff",
  borderColor: "#E9EAEB",
  card: "#2cafff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#009eff",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
