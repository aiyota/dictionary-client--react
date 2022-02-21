import types from "../types";

const wordsReducer = (state: any, action: any) => {
  switch (action.type) {
    case types.GET_WORDS:
      return {
        ...state,
        words: action.payload,
      };
    case types.GET_WORD_BY_ID:
      return {
        ...state,
        word: action.payload,
      };
    default:
      return state;
  }
};

export default wordsReducer;
