import {
  Button,
  CircularProgress,
  Container,
  CssBaseline,
} from "@mui/material";
import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { WordsContext } from "../../context/words/WordsContext";
import WordEntry from "./WordEntry";
import wordStyle from "./wordStyle";

const Word = () => {
  const wordsContext = React.useContext(WordsContext);
  const { word, loadingPage } = wordsContext;
  const { wordId } = useParams();

  React.useEffect(() => {
    if (wordId) {
      wordsContext.loadWordById(wordId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makePageContent = () => {
    if (loadingPage)
      return (
        <div>
          <CircularProgress />
        </div>
      );

    if (word && !loadingPage) return <WordEntry wordRecord={word} />;

    return <div>Word not found</div>;
  };

  return (
    <Container sx={wordStyle.wordContainer}>
      {makePageContent()}
      <Button
        sx={wordStyle.backBtn}
        component={Link}
        to="/"
        variant="contained"
      >
        Back
      </Button>
      <CssBaseline />
    </Container>
  );
};

export default Word;
