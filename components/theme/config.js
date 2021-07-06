import { Moon } from "@styled-icons/boxicons-regular/Moon";

const config = {
  name: "light",
  fonts: {
    body: '"Manrope", sans-serif',
    heading: '"Manrope", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    navigation: {
      active: "rgba(0, 0, 0, 0.75)",
      subdued: "rgba(0, 0, 0, 0.5)",
      text: "#eee",
      overlay: "rgba(0, 0, 0, 0.25)",
      buttonActive: "#000",
    },
    text: {
      100: "#BFC5C1",
      300: "#939A98",
      500: "#66706F",
      700: "#3A4245",
      900: "#0f1419",
    },
    background: "#eee",
    primary: {
      100: "#555",
      500: "#555",
      900: "#555",
    },
    secondary: {
      100: "#0f1419",
      500: "#0f1419",
      900: "#0f1419",
    },
    accent: {
      100: "#DEF5E4",
      200: "#BDEBD6",
      300: "#9CE2D5",
      400: "#7BCFD8",
      500: "#5AA1CF",
      600: "#4677A8",
      700: "#345280",
      800: "#223257",
      900: "#11162D",
    },
  },
  modeIcon: Moon,
};

export default config;
