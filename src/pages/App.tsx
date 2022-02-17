import * as React from "react";
import Container from "@mui/material/Container";
import Words from "./Words/Words";
import { WordsProvider } from "../context/words/WordsProvider";
import SiteThemeProvider from "../context/theme/SiteThemeProvider";

console.log(process.env.REACT_APP_API_URL);

const App = () => {
  return (
    <SiteThemeProvider>
      <Container maxWidth="md">
        <WordsProvider>
          <Words />
        </WordsProvider>
      </Container>
    </SiteThemeProvider>
  );
};

export default App;
