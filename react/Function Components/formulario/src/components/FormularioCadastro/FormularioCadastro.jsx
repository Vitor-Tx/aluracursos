import React from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form action="">
      <TextField
        margin="normal"
        fullWidth
        variant="outlined"
        id="nome"
        label="Nome"
      />
      <TextField
        margin="normal"
        fullWidth
        variant="outlined"
        id="sobrenome"
        label="Sobrenome"
      />
      <TextField
        margin="normal"
        fullWidth
        variant="outlined"
        id="cpf"
        label="CPF"
      />
      <TextField
        margin="normal"
        fullWidth
        variant="outlined"
        id="nome"
        label="Nome"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            defaultChecked
            color="primary"
            label="Promoções"
          />
        }
      ></FormControlLabel>

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            defaultChecked
            color="primary"
            label="Novidades"
          />
        }
      ></FormControlLabel>

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
