import * as React from "react";
import { useParams } from "react-router-dom";
import { WordsContext } from "../../context/words/WordsContext";

const Word = () => {
  const wordsContext = React.useContext(WordsContext);
  const { word } = wordsContext;
  const { wordId } = useParams();

  React.useEffect(() => {
    if (wordId) {
      wordsContext.loadWordById(wordId);
      console.log(wordsContext.loadWords);
    }
  }, []);

  return <div>{word?.word}</div>;
};

export default Word;
