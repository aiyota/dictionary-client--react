import * as React from "react";
import Word from "../../data/models/Word";

interface IWordsContextType {
  words: Word[];
  word?: Word;
  loadWords: () => void;
  loadingPage: boolean;
  loadWordById: (wordId: string) => void;
}

const wordsContextDefaultValue = {
  words: [],
  loadingPage: false,
  loadWords: () => null,
  loadWordById: (wordId: string) => null,
};

export const WordsContext = React.createContext<IWordsContextType>(
  wordsContextDefaultValue,
);
