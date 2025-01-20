# Método forEach em JavaScript

## O que é o forEach?

O método `forEach()` é uma ferramenta poderosa em JavaScript que permite iterar sobre cada elemento de um array, executando uma função específica para cada um deles. É uma forma concisa e elegante de percorrer arrays, eliminando a necessidade de escrever loops tradicionais como `for`ou `while`.

### Sintaxe:

```
array.forEach(function(elemento, indice, array) {
  // Código a ser executado para cada elemento
});
```

- **array**: O array que você deseja percorrer.
- **function**: Uma função que será chamada para cada elemento.
    - **elemento**: O valor atual do elemento.
    - **índice**: O índice do elemento atual no array.
    - **array**: O array original (opcional).

### Exemplo básico:

```
const frutas = ['maçã', 'banana', 'laranja'];

frutas.forEach(function(fruta) {
  console.log(fruta);
});
```

Saída:

```
maçã
banana
laranja
```

## Por que usar forEach?

- **Simplicidade**: A sintaxe é mais clara e concisa do que loops tradicionais.
- **Leitura**: O código fica mais fácil de entender, pois a intenção é mais explícita.
- **Funcional**: Se encaixa bem no paradigma de programação funcional.

### Usos comuns:

- **Iterar e imprimir elementos**:

```
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => console.log(numero * 2));
```

- #### Alterar elementos:

```
const nomes = ['ana', 'bia', 'carlos'];
nomes.forEach((nome, indice) => {
  nomes[indice] = nome.toUpperCase();
});
console.log(nomes); // ['ANA', 'BIA', 'CARLOS']
```

- #### Filtrar elementos (mas use filter para isso):

```
const idades = [18, 25, 16, 30];
const adultos = [];
idades.forEach(idade => {
  if (idade >= 18) {
    adultos.push(idade);
  }
});
console.log(adultos);
```

- #### Crie novos arrays (mas use map para isso):

```
const numeros = [1, 2, 3, 4, 5];
const quadrados = [];
numeros.forEach(numero => {
  quadrados.push(numero * numero);
});
console.log(quadrados);
```

### Observações importantes:

- **Não retorna um novo array**: `forEach()` modifica o array original, mas não retorna um novo array.
- **Não interromper o loop**: Se você precisar interromper o loop, use um loop tradicional ou combine `forEach()`com outras técnicas.
- **Funções de seta**: A sintaxe com funções de seta é mais concisa e moderna.

### Ao usar outros métodos:

- **Crie um novo array**: Use `map()`.
- **Filtrar elementos**: Use `filter()`.
- **Reduzir um array para um único valor**: Use `reduce()`.

### Conclusão:

O método `forEach()`é uma ferramenta essencial para trabalhar com arrays em JavaScript. Sua sintaxe simples e funcional torna-se ideal para diversas tarefas. Entender como utilizá-lo corretamente é fundamental para escrever um código mais limpo e eficiente.

### [Menu - Métodos de Array](../menu.md)