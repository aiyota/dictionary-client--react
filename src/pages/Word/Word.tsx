import { Container, CssBaseline } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import { WordsContext } from "../../context/words/WordsContext";
import WordEntry from "./WordEntry";
import wordStyle from "./wordStyle";

const Word = () => {
  const wordsContext = React.useContext(WordsContext);
  const { word } = wordsContext;
  const { wordId } = useParams();

  React.useEffect(() => {
    if (wordId) {
      wordsContext.loadWordById(wordId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container sx={wordStyle.wordContainer}>
      {!word ? <div>Word not found</div> : <WordEntry wordRecord={word} />}
      <CssBaseline />
    </Container>
  );
};

export default Word;
