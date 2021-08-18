export default class Notas {
  constructor() {
    this.notas = [];
    console.log(this.notas);
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    console.log(novaNota);
    console.log(this.notas);
    if (!this.notas) this.notas = [];
    this.notas.push(novaNota);
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1);
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}
