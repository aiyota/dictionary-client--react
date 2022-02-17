import * as React from "react";
import Word from "../../data/models/Word";

interface IWordsContextType {
  words: Word[];
  loadWords: () => void;
}

const wordsContextDefaultValue = {
  words: [],
  loadWords: () => null,
};

export const WordsContext = React.createContext<IWordsContextType>(
  wordsContextDefaultValue,
);
