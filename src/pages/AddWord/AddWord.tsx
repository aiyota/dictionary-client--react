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

import IconButton from "@mui/material/IconButton";
import { Add, Remove } from "@mui/icons-material";

const AddWord = () => {
  const [word, setWord] = React.useState("");
  const [partOfSpeechId, setPartOfSpeechId] = React.useState("");
  const [sourceId, setSourceId] = React.useState("");
  const [etymology, setEtymology] = React.useState("");

  const [definitions, setDefinitions] = React.useState<string[]>([]);
  const [definitionFieldIndex, setDefinitionFieldIndex] =
    React.useState(1);
  const [definitionFields, setDefinitionFields] = React.useState([
    createDefinitionField(0),
  ]);

  const { loadPartsOfSpeech, partsOfSpeech, loadSources, sources } =
    React.useContext(WordsContext);

  React.useEffect(() => {
    loadPartsOfSpeech();
    loadSources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleWordChange = makeKeyboardInputHandler(setWord);
  const handleEtymologyChange = makeKeyboardInputHandler(setEtymology);
  const handlePartOfSpeechChange =
    makeSelectInputHandler(setPartOfSpeechId);
  const handleSourceChange = makeSelectInputHandler(setSourceId);

  const onClickAddDefinition = (): void => {
    setDefinitionFieldIndex(index => index + 1);
    setDefinitionFields(definitionFields => [
      ...definitionFields,
      createDefinitionField(definitionFieldIndex),
    ]);
  };

  const onClickRemoveDefinition = (): void => {
    setDefinitionFields(definitionFields => {
      definitionFields.pop();
      return [...definitionFields];
    });
    setDefinitions(definitions => {
      definitions.pop();
      return [...definitions];
    });
    setDefinitionFieldIndex(index => (index <= 0 ? 0 : index - 1));
  };

  const handleSubmit = () => {
    console.log({
      word,
      partOfSpeech: partOfSpeechId,
      source: sourceId,
      etymology,
      definitions,
    });
    // validate
  };

  function createDefinitionField(index: number) {
    return (
      <TextField
        key={index}
        onChange={e => {
          setDefinitions(definitions => {
            definitions[index] = e.target.value;
            return definitions;
          });
        }}
        sx={addWordStyle.inputField}
        fullWidth
        label={`Definition ${index + 1}`}
      />
    );
  }

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

          <FormControl sx={addWordStyle.inputField} fullWidth>
            <InputLabel id="source-select-label">Source</InputLabel>
            <Select
              labelId="source-select-label"
              id="source-select"
              label="Source"
              value={sourceId}
              onChange={handleSourceChange}
            >
              {sources.map(({ id, source }) => (
                <MenuItem value={id} key={id}>
                  {source}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {definitionFields}

          <div style={{ marginBottom: ".8rem" }}>
            <IconButton
              onClick={onClickAddDefinition}
              color="success"
              aria-label="add definition"
            >
              <Add />
            </IconButton>
            <IconButton
              onClick={onClickRemoveDefinition}
              color="primary"
              aria-label="remove definition"
            >
              <Remove />
            </IconButton>
          </div>

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
