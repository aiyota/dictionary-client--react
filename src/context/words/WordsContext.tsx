import * as React from "react";
import PartOfSpeech from "../../data/models/PartOfSpeech";
import Source from "../../data/models/Source";
import Word from "../../data/models/Word";

interface IWordsContextType {
  words: Word[];
  word?: Word;
  loadWords: () => void;
  loadingPage: boolean;
  loadWordById: (wordId: string) => void;
  loadPartsOfSpeech: () => void;
  loadSources: () => void;
  partsOfSpeech: PartOfSpeech[];
  sources: Source[];
}

const wordsContextDefaultValue = {
  words: [],
  partsOfSpeech: [],
  sources: [],
  loadingPage: false,
  loadWords: () => null,
  loadWordById: (wordId: string) => null,
  loadPartsOfSpeech: () => null,
  loadSources: () => null,
};

export const WordsContext = React.createContext<IWordsContextType>(
  wordsContextDefaultValue,
);
