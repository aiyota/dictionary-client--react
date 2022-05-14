import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { WordsProvider } from "./context/words/WordsProvider";
import SiteThemeProvider from "./context/theme/SiteThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <WordsProvider>
      <SiteThemeProvider>
        <App />
      </SiteThemeProvider>
    </WordsProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
