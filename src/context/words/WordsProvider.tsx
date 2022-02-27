import * as React from "react";
import WordsApiController from "../../data/WordsApiController";
import makeConfig from "../../config/config";
import wordsReducer from "./wordsReducer";
import types from "../types";
import { WordsContext } from "./WordsContext";

type props = {
  children: JSX.Element | JSX.Element[];
};

export const WordsProvider = (props: props) => {
  const config = makeConfig();
  const wordsApiController = new WordsApiController(config.apiUrl);

  const wordsDefaultState: any = {
    words: [],
    partsOfSpeech: [],
    loadingPage: false,
    word: null,
  };

  const [state, dispatch] = React.useReducer(
    wordsReducer,
    wordsDefaultState,
  );

  const loadWords = async () => {
    setLoadingPage();
    const words = await wordsApiController.getWords();

    console.log(words);
    dispatch({ type: types.GET_WORDS, payload: words });
  };

  const loadWordById = async (wordId: string) => {
    setLoadingPage();
    const word = await wordsApiController.getWordById(wordId);

    console.log(word);
    dispatch({ type: types.GET_WORD_BY_ID, payload: word });
  };

  const loadPartsOfSpeech = async () => {
    const partsOfSpeech = await wordsApiController.getPartsOfSpeech();
    dispatch({
      type: types.GET_PARTS_OF_SPEECH,
      payload: partsOfSpeech,
    });
  };

  const setLoadingPage = () => {
    dispatch({
      type: types.LOADING_PAGE,
    });
  };

  return (
    <WordsContext.Provider
      value={{
        words: state.words,
        word: state.word,
        loadingPage: state.loadingPage,
        loadWords,
        loadWordById,
        loadPartsOfSpeech,
        partsOfSpeech: state.partsOfSpeech,
      }}
    >
      {props.children}
    </WordsContext.Provider>
  );
};
