# Async/Await e Promises

- XMLHttpRequest()

  - open('verbo http', 'url')
  - send() -> envia a requisição para o servidor
  - onload -> determina uma função que será executada ao receber a resposta
  - response -> resposta do servidor, geralmente deve ser tratada com JSON.parse()
  - status -> status http

- Promise()

  - new Promise((resolve, reject) => function)
    - resolve
    - reject
  - .then()
  - .all() - > método alternativo de construir a lista de callbacks
    de uma Promise, ao passar um array de chamadas de funções para ele

- Fetch API

  - fetch(url) -> faz a request e já retorna uma promise(ou seja,
    é possível inserir um .then logo após a chamada)

- Browser Sync
  - browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html

# Event Loop

![](../assets/img/eventloop.png)

- [Loupe](http://latentflip.com/loupe)
- web API
  - fetch API
  - Armazenamento
  - Áudio
- código javascript puro
  - single thread
