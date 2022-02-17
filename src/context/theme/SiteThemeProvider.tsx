import { ThemeProvider } from "@mui/material";
import siteTheme from "./siteTheme";
import * as React from "react";

const SiteThemeProvider = (props: React.PropsWithChildren<any>) => (
  <ThemeProvider
    theme={siteTheme}
    children={props.children}
  ></ThemeProvider>
);

export default SiteThemeProvider;
