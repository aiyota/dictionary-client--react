import CreateWordDto from "./dto/CreateWordDto";
import EditWordDto from "./dto/EditWordDto";
import Word from "./models/Word";

export default interface IWordsRepository {
  getWords(): Promise<Word[]>;
  getWordById(id: string): Promise<Word | null>;
  createWord(word: CreateWordDto): Promise<Word>;
  deleteWord(id: string): Promise<Word>;
  searchWord(search: string): Promise<Word[]>;
  editWord(word: EditWordDto): Promise<Word>;
}
