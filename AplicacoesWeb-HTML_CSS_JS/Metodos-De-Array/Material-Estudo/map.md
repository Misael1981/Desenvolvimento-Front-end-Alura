# Método `map()` em JavaScript

## O que é o método `map()`?

O método `map()`é uma ferramenta poderosa em JavaScript que permite que você transforme um array em outro, aplicando uma função específica a cada um de seus elementos. Em outras palavras, ele cria um novo array com o mesmo comprimento do array original, mas com os valores modificados de acordo com a função fornecida.

### Sintaxe:

```
novoArray = array.map(function(elemento) {
  // Retorna o novo valor para o elemento
});
```

### Exemplo Básico:

```
const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map(numero => numero * 2);

console.log(numerosDobrados); // Output: [2, 4, 6, 8, 10]
```

### Como funciona:

1. **Criar um novo array**: O método `map()`não modifica o array original, ele cria um novo array para armazenar os resultados.
2. **Itera sobre cada elemento**: A função especificada é realizada para cada elemento do array original.
3. **Aplicar a função**: A função que você passa para o `map()`recebe o elemento atual como argumento e deve retornar o novo valor para o elemento correspondente no novo array.
4. **Retorna o novo array**: Ao final, o `map()`retorna o novo array com os valores transformados.

## Casos de uso:

- **Transformar dados**: converte todos os elementos de um array para um determinado tipo de dado (por exemplo, de string para número).
- **Criar novos arrays**: Gerar um novo array com base em um array existente, mas com valores calculados ou modificados.
- **Encadear operações**: Combinar o `map()`com outros métodos como `filter()` e `reduce()` para realizar operações mais complexas.

**Exemplo mais complexo**:

```
const pessoas = [
  { nome: 'João', idade: 30 },
  { nome: 'Maria', idade: 25 },
  { nome: 'Pedro', idade: 35 }
];

const nomes = pessoas.map(pessoa => pessoa.nome);

console.log(nomes); // Output: ['João', 'Maria', 'Pedro']
```

### Dicas:

- **Funções de seta**: As funções de seta (funções de seta) são uma forma concisa de escrever funções anônimas, conforme usada no `map()`.
- **Pureza**: O `map()`é uma função pura, ou seja, ela não modifica o array original e retorna um novo array.
- **Desempenho**: Evite realizar operações complexas dentro do `map()`, pois isso pode afetar o desempenho.

### Em resumo:

O método `map()`é uma ferramenta essencial para manipular arrays em JavaScript. Ele oferece uma forma elegante e eficiente de transformar dados e criar novos arrays com base em um array existente. Ao mesmo tempo `map()`, você dará um grande passo para se tornar um desenvolvedor JavaScript mais produtivo.

### [Menu - Métodos de Array](../menu.md)