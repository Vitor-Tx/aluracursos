import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas.jsx";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
