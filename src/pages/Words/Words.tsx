import * as React from "react";
import { Typography } from "@mui/material";
import { WordsContext } from "../../context/words/WordsContext";
import WordCard from "./WordCard";
import wordsStyle from "./wordsStyle";

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
      <Typography sx={wordsStyle.header} variant="h1">
        Words
      </Typography>
      {words.map((w, i) => (
        <WordCard record={w} key={w.id} />
      ))}
    </div>
  );
};

export default Words;
