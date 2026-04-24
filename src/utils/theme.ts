import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "primary",

  colors: {
    primary: [
      "#fff1f1",
      "#ffe1e1",
      "#ffc7c7",
      "#ffa8a8",
      "#ff8a8a",
      "#e95959", //primary
      "#d94c4c",
      "#c23f3f",
      "#a83434",
      "#912a2a",
    ],

    secondary: [
      "#fdf8f8",
      "#f8eeee",
      "#f1dddd",
      "#e9caca",
      "#e3d1d1", //secondary
      "#d6bcbc",
      "#c8a6a6",
      "#ba9090",
      "#ac7a7a",
      "#9e6666",
    ],
  },

  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 10px rgba(0,0,0,0.1)",
    lg: "0 10px 25px rgba(0,0,0,0.15)",
    xl: "0 20px 40px rgba(0,0,0,0.2)",
  },

  fontFamily: "Roboto, sans-serif",

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: "36px", fontWeight: "700" },
      h2: { fontSize: "28px", fontWeight: "600" },
      h3: { fontSize: "22px", fontWeight: "600" },
    },
  },
});
