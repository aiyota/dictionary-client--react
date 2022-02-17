import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Words from "./pages/Words/Words";

console.log(process.env.REACT_APP_API_URL);

const App = () => {
  return (
    <Container maxWidth="md">
      <Words></Words>
    </Container>
  );
};

export default App;
