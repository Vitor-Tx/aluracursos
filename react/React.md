# React

![](https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png)

- Create-React-App

  - npx create-react-app my-app

- JSX

  - Extensão da sintaxe do JS

- div id=root

- Componentes

  - Cada componente só pode ter um elemento pai
  - export class / export function
  - export default -> import Componente from
  - export -> import { Componente } from
  - import React, { Component } from "react";
  - render(
    return(
    componente
    );
    )

- Snippets

  - imrc -> import React, { Component } from 'react';
  - cc -> class component

- Integrando JS nos componentes

  - Dentro do return do render, usar {}
    para encapsular código JS
  - Não pode usar for normal
  - Foreach "funciona", mas nao renderiza nada
  - pode usar array e map()

- loops

  - map(index, elemento)
  - key={index} -> identificador único, necessário para o elemento pai

- estilização de componentes

  - criar arquivo .css e importar no componente
  - import "./style.css";
  - className
  - conflito de nome de classes css
    - na transpilação, todos os arquivos
      .css viram um só

- Convenções

  - imports limpos
    - index.js nos componentes

- Event Handling

  - eventos
    - onChange
  - event handlers
    - event.target
    - this fica fora de contexto
      porque é passada uma referência
      para esse método, não o método da classe
    - associar o handler com binding
    - onChange={this.handler.bind(this)}
    - button submit
      - preventDefault
      - stopPropagation

- Passar funções entre componentes

  - Pai passa função como propriedade do componente filho

- Props

  - Props são propriedades que passamos de um componente para outro quando o componente filho precisa de uma informação que o componente pai possui.
  - constructor(props)
  - <- componente prop={valor} ->
  - this.props.prop

- state

  - é uma forma de salvar informações que serão observadas pelo Virtual Dom.
  - this.state = {
    var: [],
    }
  - const newState = [...this.state.var, newVar]
  - this.setState(newState)
  - stateful components
  - stateless components (priorizar)
  - quando um componente pai muda de estado, ele é
    re-renderizado, e consequentemente seus filhos
    também

- Binding

  - recebe uma função como parâmetro e retorna uma nova função

- Importando svg

  - import img from "img.svg"
  - import {ReactComponent as IMG} from "img.svg" (só funciona com create react app ou usando o SVGR)
  - SVGR -> lib que transforma svgs em componentes react

- Componente Fragment

  - tag vazia "<> </>"
  - serve para fazer um wrapping no componente,
    que não será estilizado.

- Arquitetura

  - separação entre visualização / renderização
  - os dados devem ser armazenados em outra entidade
  - pasta com as classes que abstraem os tipos de dados
  - tem que fazer binding com o objeto de dados
  - prop = {this.objeto.func.bind(this.objeto)}

- Padrão Observable

  - observable -> classe com os dados
    - inscrever() -> pra chamar no componentDidMount() do observer
    - notificar() -> pra chamar nos métodos que fazem
      alteração nos observables
    - desinscrever() -> necessário pra evitar referencia
      a null quando algum componente for apagado e algum
      metodo notificar() tentar notificá-lo de uma mudança
      - chamar no componentWillunmount() do observer
  - observer -> componente que é re-renderizado quando os dados são alterados
    - \_newObservable(observable)
      - this.setState({ ...this.state, observable })

- Ciclo de vida dos componentes
  <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram">
  ![](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png)
  </a>
  - todo componente react tem um ciclo de vida
  - efeitos colaterais
  - montagem
    - constructor()
      - this.\_novoObservable = this.\_novoObservable.bind(this);
    - render()
    - atualiza o virtual DOM e referências
    - componentDidMount()
      - recomendado colocar efeitos colaterais nele
      - ideal para observable
      - this.props.observable.inscrever(this.\_novoObservable.bind(this));
      - "observable" = qualquer observable que precise
        ser observado por esse componente
  - atualização
    - new props, setState() e forceUpdate() -> render()
    - atualiza o virtual DOM e referências
    - componentDidUpdate()
  - desmontagem
    - componentWillunmount()
      - this.props.observable.desinscrever(this.\_novoObservable.bind(this));
  - local state
