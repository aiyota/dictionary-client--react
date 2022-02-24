import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import addWordStyle from "./addWordStyle";
import {
  makeKeyboardInputHandler,
  makeSelectInputHandler,
} from "../../utils";
import { WordsContext } from "../../context/words/WordsContext";

const AddWord = () => {
  const [word, setWord] = React.useState("");
  const [partOfSpeechId, setPartOfSpeechId] = React.useState("");
  const [definition, setDefinition] = React.useState("");
  const [etymology, setEtymology] = React.useState("");

  const { loadPartsOfSpeech, partsOfSpeech } =
    React.useContext(WordsContext);

  React.useEffect(() => {
    loadPartsOfSpeech();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleWordChange = makeKeyboardInputHandler(setWord);
  const handleDefinitionChange = makeKeyboardInputHandler(setDefinition);
  const handleEtymologyChange = makeKeyboardInputHandler(setEtymology);
  const handlePartOfSpeechChange =
    makeSelectInputHandler(setPartOfSpeechId);

  const handleSubmit = () => {
    console.log({
      word,
      definition,
      partOfSpeech: partOfSpeechId,
      etymology,
    });
    // validate
  };

  return (
    <Container sx={addWordStyle.container}>
      <Card sx={addWordStyle.card}>
        <CardContent>
          <Typography
            sx={addWordStyle.header}
            variant="h2"
            component="div"
          >
            Add Word
          </Typography>
          <TextField
            onKeyDown={handleWordChange}
            sx={addWordStyle.inputField}
            fullWidth
            label="Word"
            id="word-input"
          />

          <FormControl sx={addWordStyle.inputField} fullWidth>
            <InputLabel id="part-of-speech-select-label">
              Part of Speech
            </InputLabel>
            <Select
              labelId="part-of-speech-select-label"
              id="part-of-speech-select"
              label="Part of Speech"
              value={partOfSpeechId}
              onChange={handlePartOfSpeechChange}
            >
              {partsOfSpeech.map(({ id, partOfSpeech }) => (
                <MenuItem value={id} key={id}>
                  {partOfSpeech}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            onKeyDown={handleDefinitionChange}
            sx={addWordStyle.inputField}
            fullWidth
            label="Definition"
            id="definition-input"
          />
          <TextField
            onKeyDown={handleEtymologyChange}
            id="etymology-input"
            fullWidth
            label="Etymology"
            multiline
            maxRows={4}
          />
          <div style={addWordStyle.lowerButtonContainer}>
            <Button
              sx={addWordStyle.backBtn}
              component={Link}
              to="/"
              size="large"
              variant="contained"
            >
              Back
            </Button>
            <Button
              color="success"
              size="large"
              sx={addWordStyle.addBtn}
              onClick={handleSubmit}
              variant="contained"
            >
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
      <CssBaseline />
    </Container>
  );
};

export default AddWord;
