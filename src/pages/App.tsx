import { CssBaseline } from "@mui/material";
import Words from "./Words/Words";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Word from "./Word/Word";
import AddWord from "./AddWord/AddWord";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Words />} />
        <Route path="/word">
          <Route path=":wordId" element={<Word />}></Route>
        </Route>
        <Route path="/add-word" element={<AddWord />} />
      </Routes>
      <CssBaseline />
    </BrowserRouter>
  );
};

export default App;
