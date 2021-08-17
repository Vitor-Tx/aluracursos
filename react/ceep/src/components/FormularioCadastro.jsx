import React, { Component } from "react";

export class FormularioCadastro extends Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Título" />
        <textarea name="area" placeholder="Escreva sua nota..."></textarea>
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
