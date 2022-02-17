import Definition from "./Definition";

type Word = {
  id: string;
  word: string;
  definitions: Definition[];
  etymology: string;
  partOfSpeech: Word;
};

export default Word;
