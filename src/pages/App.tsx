import * as React from "react";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Words from "./Words/Words";

const App = () => {
  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Words />
    </Container>
  );
};

export default App;
