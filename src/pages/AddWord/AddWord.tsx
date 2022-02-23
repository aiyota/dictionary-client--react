import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import addWordStyle from "./addWordStyle";
import { makeKeyboardInputHandler } from "../../utils";
import { WordsContext } from "../../context/words/WordsContext";

const AddWord = () => {
  const [word, setWord] = React.useState("");
  const [definition, setDefinition] = React.useState("");
  const [etymology, setEtymology] = React.useState("");

  const { loadPartsOfSpeech } = React.useContext(WordsContext);

  React.useEffect(() => {
    loadPartsOfSpeech();
  }, []);

  const handleWordChange = makeKeyboardInputHandler(setWord);
  const handleDefinitionChange = makeKeyboardInputHandler(setDefinition);
  const handlEtymologyChange = makeKeyboardInputHandler(setEtymology);

  const handleSubmit = () => {
    console.log({ word, definition, etymology });
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
            sx={addWordStyle.textField}
            fullWidth
            label="Word"
            id="word-input"
          />
          <TextField
            onKeyDown={handleDefinitionChange}
            sx={addWordStyle.textField}
            fullWidth
            label="Definition"
            id="definition-input"
          />
          <TextField
            onKeyDown={handlEtymologyChange}
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
