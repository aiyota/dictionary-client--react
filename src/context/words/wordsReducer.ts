import types from "../types";

export default (state: any, action: any) => {
  switch (action.type) {
    case types.GET_WORDS:
      return {
        ...state,
        words: action.payload,
      };

    default:
      return state;
  }
};
