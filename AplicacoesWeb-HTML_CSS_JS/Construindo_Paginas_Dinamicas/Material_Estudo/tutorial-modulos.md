# Tutorial: Modularização no JavaScript

## O que é Modularização?

Modularização é o processo de dividir seu código em módulos, que são arquivos ou partes do código que têm uma responsabilidade específica. Isso torna o código mais fácil de entender e gerenciar.

## Tipos de Módulos

1. ***Módulos ES6***: Usam a palavra-chave import e export.
2. ***CommonJS***: Usado principalmente no Node.js, utiliza require() e module.exports.

## Passo a Passo para Módulos ES6

### 1. Criar um Módulo

Comece criando um arquivo JavaScript para seu módulo. Vamos chamar de math.js.

```
// math.js
export function soma(a, b) {
    return a + b;
}

export function subtrai(a, b) {
    return a - b;
}
```


Aqui, estamos exportando duas funções: `soma` e `subtrai`. O export permite que essas funções sejam usadas em outros arquivos.

### 2. Importar o Módulo

Agora, crie outro arquivo onde você quer usar essas funções. Vamos chamar de app.js.

```
// app.js
import { soma, subtrai } from './math.js';

console.log(soma(5, 3)); // Saída: 8
console.log(subtrai(5, 3)); // Saída: 2
```

Usamos **import** para trazer as funções do arquivo `math.js` para o nosso arquivo `app.js`. A sintaxe `{ soma, subtrai }` permite importar apenas as funções que precisamos.

### 3. Executar o Código

Para rodar seu código com módulos ES6 em um ambiente local (como um navegador), você pode usar a tag `<script>` com o atributo `type="module"`:

```
html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de Módulos</title>
</head>
<body>
    <script type="module" src="app.js"></script>
</body>
</html>
```

### Passo a Passo para CommonJS (Node.js)

Se você estiver usando Node.js, faça assim:

#### 1. Criar um Módulo

```
// math.js
function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

module.exports = { soma, subtrai };
```

Aqui usamos `module.exports` para exportar as funções.

#### 2. Importar o Módulo

```
// app.js
const { soma, subtrai } = require('./math');

console.log(soma(5, 3)); // Saída: 8
console.log(subtrai(5, 3)); // Saída: 2
```

### Dicas Finais

- ***Organize seus arquivos***: Crie pastas para diferentes módulos.
- ***Nomes Descritivos***: Dê nomes claros aos seus módulos e funções.
- ***Documentação***: Comente seu código para facilitar o entendimento.

### [Voltar ao Menu - JavaScript: construindo páginas dinâmicas](../menu.md)