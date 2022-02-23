import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Word from "./pages/Word/Word";
import { WordsProvider } from "./context/words/WordsProvider";
import SiteThemeProvider from "./context/theme/SiteThemeProvider";
import AddWord from "./pages/AddWord/AddWord";

ReactDOM.render(
  <React.StrictMode>
    <WordsProvider>
      <SiteThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/word">
              <Route path=":wordId" element={<Word />}></Route>
            </Route>
            <Route path="/add-word" element={<AddWord />} />
          </Routes>
        </BrowserRouter>
      </SiteThemeProvider>
    </WordsProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
