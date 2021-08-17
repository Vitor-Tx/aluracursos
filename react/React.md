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

  - map()
  - key -> identificador único, necessário para o elemento pai

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
