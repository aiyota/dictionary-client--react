import * as React from "react";
import { Typography } from "@mui/material";
import { WordsContext } from "../../context/words/WordsContext";
import WordCard from "./WordCard";

const Words = () => {
  const wordsContext = React.useContext(WordsContext);
  const { words } = wordsContext;

  React.useEffect(() => {
    wordsContext.loadWords();
  }, []);

  return words.length === 0 ? (
    <Typography variant="h4">No words found...</Typography>
  ) : (
    <div>
      <Typography variant="h1">Glosseon</Typography>
      {words.map((w, i) => (
        <WordCard record={w} unique={`card-${i + 1}`} />
      ))}
    </div>
  );
};

export default Words;
