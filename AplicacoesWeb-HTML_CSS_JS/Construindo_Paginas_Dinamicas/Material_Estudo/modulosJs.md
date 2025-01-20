# Módulos JavaScript

## O que são módulos JavaScript?

Módulos JavaScript são um recurso moderno que permite organizar o código em arquivos separados, facilitando a reutilização, a manutenção e a escalabilidade de projetos. Eles funcionam como pequenas "caixas" que encapsulam funcionalidades específicas, permitindo que você importe apenas o que precisa em outros arquivos.

### Por que usar módulos?

- **Organização**: Dividir o código em partes menores e mais gerenciáveis.
- **Reutilização**: Permite criar funções e componentes reutilizáveis ​​em diferentes partes do projeto.
- **Escalabilidade**: Facilita a manutenção e a colaboração em projetos maiores.
- **Evita conflitos de nomes**: Cada módulo tem seu próprio escopo, evitando colisões de variáveis.

### Sintaxe básica

## Export:

Para exportar uma função, classe ou variável de um módulo, use uma palavra-chave `export`.

```
// modulo.js
export function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

export const PI = 3.14159;
```

### Importante: 

Para importar elementos de outros módulos, use a palavra-chave `import`.

```
// outroModulo.js
import { saudacao, PI } from './modulo.js';

saudacao('Mundo');
console.log(PI);
```

### Tipos de exportação

- **Exportações nomeadas**: Exporta elementos com nomes específicos.
- **Exportação padrão**: Exporta um único elemento como padrão.

```
// modulo.js
export function saudacao(nome) { ... } // named export

export default function soma(a, b) { ... } // default export
```
```
// outroModulo.js
import { saudacao } from './modulo.js';
import soma from './modulo.js';
```

### Importando tudo

```
import * as modulo from './modulo.js';

modulo.saudacao('Mundo');
console.log(modulo.PI);
```

### Renomeando ao importar

```
import { saudacao as ola } from './modulo.js';

ola('Mundo');
```

### Módulos sonoros (Módulos ES)

- **Importação sonora**: Carrega módulos de forma assíncrona.
- **Uso comum**: Carregar módulos sob demanda, como componentes em rotas.

```
import('./modulo.js')
  .then(modulo => {
    modulo.saudacao('Mundo');
  })
  .catch(error => {
    console.error(error);
  });
```

### Considerações importantes

- **Suporte a navegadores**: Nem todos os navegadores mais antigos suportam nativamente módulos ES. É comum usar um transpiler como Babel para converter o código para versões mais antigas do JavaScript.
- **Node.js**: No Node.js, os módulos são carregados de forma sincronizada por padrão. Utilize o CommonJS ou o ES Modules, dependendo da sua configuração.
- **Formato dos arquivos**: Módulos JavaScript geralmente possuem a extensão `.js` ou `.mjs`.

**Exemplo prático**: Criando uma calculadora modular

#### calculadora.js:

```
export function soma(a, b) {
  return a + b;
}

export function subtracao(a, b) {
  return a - b;
}
```

#### índice.js:

```
import { soma, subtracao } from './calculadora.js';

const resultadoSoma = soma(5, 3);
const resultadoSubtracao = subtracao(10, 4);

console.log(resultadoSoma); // 8
console.log(resultadoSubtracao); // 6
```

## Recursos adicionais

- ### [Documentação da Web MDN:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules)

### [Voltar ao Menu - JavaScript: construindo páginas dinâmicas](../menu.md)

# Exercício de Módulos JavaScript

Vamos colocar a mão na massa e dominar os módulos JavaScript!

#### Que tal começarmos com um exercício prático?

## Crie um projeto simples de uma biblioteca:

1. **Crie uma pasta**: Chame-a de "minha-biblioteca".
2. **Crie dois arquivos JavaScript dentro dessa pasta**:

- `utils.js`: Aqui ficarão as funções utilitárias.
- `index.js`: Aqui será o ponto de entrada do seu programa.

### Conteúdo de utils.js:

```
export function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

export function soma(a, b) {
  return a + b;
}

export function subtracao(a, b) {
  return a - b;
}
```

### Conteúdo de index.js:

```
import { saudacao, soma, subtracao } from './utils.js';

saudacao('Mundo');
console.log(soma(5, 3));
console.log(subtracao(10, 4));
```

#### Agora, abra seu terminal, navegue até a pasta do projeto e execute o código:

Terminal

```
node index.js
```

### Você deve ver a seguinte saída:

```
Olá, Mundo!
8
6
```

**Parabéns!** Você acabou de criar sua primeira biblioteca JavaScript usando módulos.

### Vamos explorar mais?

- **Exercício** 1: Crie um módulo chamado math.jscom funções para multiplicação e divisão. Importe-o em index.jse utilize essas novas funções.
- **Exercício** 2: Crie um módulo chamado pessoa.jscom uma classe Pessoaque tenha propriedades como nome, idade e métodos como falare andar. Exporte essa classe e utilize-a index.jspara criar objetos do tipo Pessoa.
- **Exercício** 3: Explore o import sonoro para carregar módulos sob demanda, como em uma aplicação Single Page Application (SPA).

### Dicas:

- **Organize seu código**: Divida seu projeto em módulos menores e mais específicos.
- **Utilize nomes claros**: Os nomes das funções e dos módulos devem ser intuitivos e refletir sobre sua funcionalidade.
- **Documente seu código**: Use comentários para explicar o propósito de cada função e módulo.
- **Utilize um linter**: Ferramentas como ESLint ajudam a manter a qualidade do seu código e a seguir boas práticas de programação.