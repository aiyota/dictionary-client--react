import * as React from "react";
import { Typography } from "@mui/material";
import { WordsContext } from "../../context/words/WordsContext";

const Words = () => {
  const wordsContext = React.useContext(WordsContext);
  const { words } = wordsContext;

  React.useEffect(() => {
    wordsContext.loadWords();
  }, []);

  return (
    <div>
      <Typography variant="h1">Glosseon</Typography>
      {words.map(w => (
        <Typography>{w.word}</Typography>
      ))}
    </div>
  );
};

export default Words;
