# Método `sort()` em JavaScript

## O que é o método `sort()`?

O método `sort()` em JavaScript é uma ferramenta poderosa para organizar os elementos de um array. Ele ordena os elementos no local, ou seja, modifica o array original.

### Como funciona?

Por padrão, o `sort()` ordena os elementos como strings. Isso significa que números serão convertidos para strings e ordenados alfabeticamente. Por exemplo:

```
const numeros = [5, 2, 9, 1, 5];
numeros.`sort()`; // Resultado: [1, 2, 5, 5, 9] (ordenados como strings)
```

## Personalizando a ordenação

Para ordenar os elementos de acordo com critérios específicos, como ordem numérica ou por propriedades de objetos, você pode passar uma função de comparação como argumento para o `sort()`.

### Função de comparação:

- Recebe dois elementos do array como parâmetros.
- Deve retornar:
    - Um número negativo se o primeiro elemento deve vir antes do segundo.
    - Um número positivo se o primeiro elemento deve vir depois do segundo.
    - Zero se os elementos são considerados iguais.

#### Exemplo: Ordenando números em ordem crescente:

```
const numeros = [5, 2, 9, 1, 5];
numeros.sort((a, b) => a - b); // Resultado: [1, 2, 5, 5, 9]
```

#### Exemplo: Ordenando objetos por uma propriedade:

```
const pessoas = [
    { nome: 'Ana', idade: 30 },
    { nome: 'Carlos', idade: 25 },
    { nome: 'Bia', idade: 28 }
];

pessoas.sort((a, b) => a.idade - b.idade); // Ordena por idade
```

### Exemplos práticos

- #### Ordenar strings em ordem alfabética:

```
const nomes = ['Carlos', 'Ana', 'Bia'];
nomes.`sort()`; // Resultado: ['Ana', 'Bia', 'Carlos']
```

- #### Ordenar um array de objetos por múltiplas propriedades:

```
const produtos = [
    { nome: 'Camiseta', preço: 20, cor: 'Azul' },
    { nome: 'Calça', preço: 50, cor: 'Preto' },
    { nome: 'Tênis', preço: 80, cor: 'Branco' }
];

produtos.sort((a, b) => {
    if (a.preço !== b.preço) {
        return a.preço - b.preço;
    } else {
        return a.nome.localeCompare(b.nome);
    }
});
```

### Pontos importantes

- O `sort()` modifica o array original. Se você precisar manter o array original, crie uma cópia antes de chamar o `sort()`.
- A ordenação não é estável por padrão. Isso significa que elementos iguais podem não manter a ordem original.
- Para ordenação estável, você pode usar bibliotecas como Lodash ou criar suas próprias funções de ordenação estável.

### Conclusão

O método `sort()` é uma ferramenta fundamental para manipulação de arrays em JavaScript. Com ele, você pode organizar seus dados de forma eficiente e personalizada. A compreensão da função de comparação é essencial para dominar o uso do `sort()`.

### [Menu - Métodos de Array](../menu.md)