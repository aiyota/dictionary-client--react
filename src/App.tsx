import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

console.log(process.env.REACT_APP_API_URL);

const App = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h1">Glosseon</Typography>
    </Container>
  );
};

export default App;
