import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Word from "../../data/models/Word";
import wordsStyle from "./wordsStyle";
import { Link } from "react-router-dom";

const WordCard = ({ record }: { record: Word }) => {
  return (
    <div>
      <Card sx={wordsStyle.card}>
        <CardContent>
          <Typography variant="h4" component="div">
            {record.word}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {record?.partOfSpeech?.partOfSpeech || ""}
          </Typography>
          <Typography variant="body2">
            {record?.definitions[0]?.definition || ""}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/word/${record.id}`} size="small">
            View Entry
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default WordCard;
