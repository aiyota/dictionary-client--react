import * as React from "react";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Words from "./Words/Words";
import { WordsProvider } from "../context/words/WordsProvider";
import SiteThemeProvider from "../context/theme/SiteThemeProvider";

console.log(process.env.REACT_APP_API_URL);

const App = () => {
  return (
    <SiteThemeProvider>
      <Container maxWidth="md">
        <CssBaseline />
        <WordsProvider>
          <Words />
        </WordsProvider>
      </Container>
    </SiteThemeProvider>
  );
};

export default App;
