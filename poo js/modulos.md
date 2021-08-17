# Modulos e POO em javascript

- Módulos

  - No JavaScript, cada arquivo define um módulo, e os módulos podem exportar informações para serem consumidas por
    outros módulos, algo que é feito com a instrução export. Em Cliente.js, como queremos exportar a definição da classe
    Cliente, adicionaremos essa palavra-chave antes da classe.
  - export class
  - import {} from "./arquivo.js"
  - package.json
  - Para carregar um módulo EcmaScript, defina "type": "module" no arquivo package.json ou use a extensão .mjs
  - npm init

- private : \_ ou #

- static (mesma coisa do java)

- get e set

  - get atributo()
  - set atributo()

- constructor() -> mesma coisa do java, só que com nome constructor

  - objeto.constructor -> atributo, não método
  - if(objeto.constructor == Classe)

- classes abstratas

  - no inicio do metodo constructor da classe que é pra ser abstrata:
  - if(constructor == ClasseAbstrata)
  - throw new Error("Você não pode instanciar essa classe!")

- métodos abstratos

  - throw new Error no corpo do método abstrato, na classe abstrata

- verificar se existe um metodo especifico em uma classe
  - return "metodo" in objeto &&
    objeto.metodo instanceof Function
