import CreateWordDto from "./dto/CreateWordDto";
import EditWordDto from "./dto/EditWordDto";
import PartOfSpeech from "./models/PartOfSpeech";
import Source from "./models/Source";
import Word from "./models/Word";

export default interface IWordApiController {
  getWords(): Promise<Word[]>;
  getWordById(id: string): Promise<Word | null>;
  createWord(word: CreateWordDto): Promise<Word>;
  deleteWord(id: string): Promise<Word>;
  searchWord(search: string): Promise<Word[]>;
  editWord(word: EditWordDto): Promise<Word>;
  getPartsOfSpeech(): Promise<PartOfSpeech[]>;
  getSources(): Promise<Source[]>;
}
