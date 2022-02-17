import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { WordsProvider } from "./context/words/WordsProvider";

ReactDOM.render(
  <React.StrictMode>
    <WordsProvider>
      <App />
    </WordsProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
