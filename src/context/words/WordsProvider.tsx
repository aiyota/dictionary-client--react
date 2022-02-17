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

  return (
    <WordsContext.Provider
      value={{
        words: state.words,
        loadWords: loadWords,
      }}
    >
      {props.children}
    </WordsContext.Provider>
  );
};
