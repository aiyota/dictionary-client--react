import * as React from "react";
import WordsRepository from "../../data/WordsRepository";
import makeConfig from "../../config/config";
import wordsReducer from "./wordsReducer";
import types from "../types";
import { WordsContext } from "./WordsContext";

type props = {
  children: JSX.Element | JSX.Element[];
};

export const WordsProvider = (props: props) => {
  const config = makeConfig();
  const wordsRepository = new WordsRepository(config.apiUrl);

  const wordsDefaultState: any = {
    words: [],
    word: null,
  };

  const [state, dispatch] = React.useReducer(
    wordsReducer,
    wordsDefaultState,
  );

  const loadWords = async () => {
    const words = await wordsRepository.getWords();

    console.log(words);
    dispatch({ type: types.GET_WORDS, payload: words });
  };

  const loadWordById = async (wordId: string) => {
    const word = await wordsRepository.getWordById(wordId);
    console.log(word);
    dispatch({ type: types.GET_WORD_BY_ID, payload: word });
  };

  return (
    <WordsContext.Provider
      value={{
        words: state.words,
        word: state.word,
        loadWords,
        loadWordById,
      }}
    >
      {props.children}
    </WordsContext.Provider>
  );
};
