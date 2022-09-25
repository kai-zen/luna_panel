import { indigo } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: indigo[50],
    },
    secondary: {
      main: indigo[700],
    },
    CTA: {
      main: indigo[400],
    },
  },
  typography: {
    fontFamily: "iransans",
  },
});
