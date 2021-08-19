import "./App.css";
import FormularioCadasto from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography component="h1" variant="h3" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadasto />
    </Container>
  );
}
export default App;
