import { red } from "@mui/material/colors";
import createTheme from "@mui/material/styles/createTheme";

const siteTheme = createTheme({
  palette: {
    primary: red,
  },
  typography: {
    fontFamily: ["'Segoe UI'", "sans-serif"].join(","),
  },
});

export default siteTheme;
