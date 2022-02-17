import { useParams } from "react-router-dom";

const Word = () => {
  const { wordId } = useParams();
  console.log(wordId);
  return <div>Word</div>;
};

export default Word;
