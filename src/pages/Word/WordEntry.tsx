import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Word from "../../data/models/Word";

const WordEntry = ({ wordRecord }: { wordRecord: Word }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {wordRecord.word}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {wordRecord.partOfSpeech.partOfSpeech}
        </Typography>
        {wordRecord.definitions.map(d => (
          <Typography key={d.id} variant="body2">
            {d.definition}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default WordEntry;
