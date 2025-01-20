# Guia para manipular eventos no DOM com JavaScript: técnicas e exemplos práticos

<img src="./img/eventos-do-dom-01.webp">

Imagine que você está coordenando uma equipe de desenvolvimento em uma empresa de tecnologia.

Cada dev é responsável por uma parte importante do aplicativo mobile e cada linha de código é um evento que precisa ser gerenciado para criar uma experiência de usuário fluida e suave.

Ao interagir com o aplicativo, a pessoa usuária desencadeia uma série de eventos que devem ser coordenados para garantir uma navegação fluida e intuitiva.

Neste artigo, vamos explorar o incrível mundo dos eventos do DOM (Document Object Model).

### Exploraremos:

- O que são eventos do DOM;
- Os principais eventos, como cliques, movimentos de mouse, teclado e eventos de formulário;
- Maneiras de adicionar e remover os eventos em nosso código;
- Exemplos de como usar os eventos do DOM para criar páginas interativas e dinâmicas;
- Dicas de como usar da melhor maneira os eventos do DOM.

## O que são os eventos do DOM?

Podemos dizer que os eventos em JavaScript são ações que ocorrem no navegador, como um clique do mouse, o pressionamento de alguma tecla ou até mesmo o carregamento de uma página.

Tais ações podem ser capturadas pelo navegador e manipuladas para garantir uma interação mais dinâmica com a página web.

## Como associar eventos aos elementos HTML?

Há duas maneiras principais de associar eventos aos elementos HTML, a primeira delas é utilizar o atributo `on` diretamente na tag dentro do arquivo HTML.

Por exemplo, podemos associar a função `botaoClicado`, definida em JavaScript para exibir um alerta com a mensagem "***Botão Clicado!***", ao evento de `click` de um botão adicionando o atributo `onclick` da seguinte maneira:

```
<button onclick="botaoClicado()">Clique aqui </button>
```

A segunda maneira é usar métodos do próprio JavaScript de adição e remoção de eventos como o `addEventListener` e o `removeEventListener`.

Ambos permitem maior flexibilidade para lidar com eventos do DOM. Além disso, dessa maneira mantemos a lógica de programação e toda a dinamicidade que estamos usando na aplicação em apenas um documento, neste o arquivo que contém a linguagem JavaScript.

``````
``````
``````
``````
``````
``````
``````
``````
``````
``````
``````
``````
``````
``````
``````
``````
``````
``````
``````
```
```



### [Voltar ao Menu Desenvolvimento Front-end](./menu.md)