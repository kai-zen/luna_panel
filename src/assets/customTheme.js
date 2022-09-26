import { createTheme } from "@mui/material/styles";
import { allColors } from "./constants";

const index = Math.floor(Math.random() * allColors.length);
const themeColor = allColors[index];
console.log(index);
export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: themeColor[100],
    },
    secondary: {
      light: themeColor[300],
      main: themeColor[800],
    },
    CTA: {
      main: themeColor[200],
      dark: themeColor[400],
    },
    text: {
      primary: themeColor[900],
      secondary: themeColor[800],
    },
  },
  typography: {
    fontFamily: "iransans",
  },
});
