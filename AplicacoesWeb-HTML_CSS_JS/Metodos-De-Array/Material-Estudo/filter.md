# Método `filter()` em JavaScript

## O que é o `filter()`?

O método `filter()` é uma ferramenta poderosa em JavaScript que nos permite criar um novo array a partir de um array existente, contendo apenas os elementos que satisfazem uma determinada condição. Imagine que você tem uma lista de números e deseja extrair apenas os números pares. O `filter()` é perfeito para isso!

## Como funciona?

O `filter()` recebe uma função como argumento. Essa função, chamada de callback, é executada para cada elemento do array original. A cada iteração, a função callback deve **retornar um valor booleano (true ou false)**.

- **Se a função callback retornar true**: O elemento atual é adicionado ao novo array.
- **Se a função callback retornar false**: O elemento atual é descartado.

### Sintaxe:

```
novoArray = arrayOriginal.filter(function(elemento) {
  // Condição para filtrar os elementos
  return condição;
});
```

### Exemplo:

```
const numeros = [1, 2, 3, 4, 5, 6];

const numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); // Saída: [2, 4, 6]
```

#### Explicando o exemplo:

1. **Criamos um array**: `numeros` com os números de 1 a 6.
2. **Aplicamos o `filter()`**: Chamamos o método `filter()` no array `numeros` e passamos uma função como argumento.
3. **Função callback**: A função verifica se o número atual é par (dividido por 2 e o resto é 0).
4. **Retorno**: Se o número for par, a função retorna `true`, adicionando-o ao novo array `numerosPares`.
5. **Novo array**: O `numerosPares` conterá apenas os números pares do array original.

#### Usando Arrow Functions (Sintaxe mais moderna):

```
const numerosImpares = numeros.filter(numero => numero % 2 !== 0);
```

### Outros exemplos:

- #### Filtrar objetos:

```
const pessoas = [
  { nome: 'Alice', idade: 25 },
  { nome: 'Bob', idade: 30 },
  { nome: 'Charlie', idade: 22 }
];

const pessoasAdultas = pessoas.filter(pessoa => pessoa.idade >= 18);
```

- #### Filtrar strings:

```
const palavras = ['banana', 'maçã', 'laranja', 'uva'];

const palavrasComA = palavras.filter(palavra => palavra.includes('a'));
```

## Por que usar o `filter()`?

- **Código mais limpo**: Evita o uso de loops e condicionais complexos.
- **Funcional**: Promove um estilo de programação mais funcional.
- **Reutilizável**: A função callback pode ser reutilizada em diferentes contextos.
- **Legível**: Facilita a compreensão do código.

### Em resumo:

O `filter()` é uma ferramenta essencial para manipular arrays em JavaScript. Ele permite criar novos arrays com base em critérios específicos, tornando seu código mais conciso e eficiente.

### [Menu - Métodos de Array](../menu.md)