import * as React from "react";
import PartOfSpeech from "../../data/models/PartOfSpeech";
import Word from "../../data/models/Word";

interface IWordsContextType {
  words: Word[];
  word?: Word;
  loadWords: () => void;
  loadingPage: boolean;
  loadWordById: (wordId: string) => void;
  loadPartsOfSpeech: () => void;
  partsOfSpeech: PartOfSpeech[];
}

const wordsContextDefaultValue = {
  words: [],
  partsOfSpeech: [],
  loadingPage: false,
  loadWords: () => null,
  loadWordById: (wordId: string) => null,
  loadPartsOfSpeech: () => null,
};

export const WordsContext = React.createContext<IWordsContextType>(
  wordsContextDefaultValue,
);
