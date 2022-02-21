import * as React from "react";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Words from "./Words/Words";
import { WordsProvider } from "../context/words/WordsProvider";
import SiteThemeProvider from "../context/theme/SiteThemeProvider";

const App = () => {
  return (
    <SiteThemeProvider>
      <Container maxWidth="md">
        <CssBaseline />
        <Words />
      </Container>
    </SiteThemeProvider>
  );
};

export default App;
