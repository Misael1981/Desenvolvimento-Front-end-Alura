# O evento `change` em JavaScript

## O que é o evento `change`?

Em JavaScript, o evento `change` é disparado quando o valor de um elemento HTML é alterado e essa alteração é confirmada pelo usuário . Essa confirmação pode ocorrer de diversas maneiras, dependendo do tipo de elemento:

- **`<input type="text">`**: Ao perder o foco do campo (clicando em outro lugar da página).
- **`<select>`**: Ao selecionar uma nova opção.
- **`<textarea>`**: Ao perder o foco do campo.
- **`<checkbox>`ou `<radio>`** : Ao marcar ou desmarcar uma opção.

## Para que serve?

O evento `change` é fundamental para criar interfaces dinâmicas e interativas. Ele permite que você execute ações específicas quando o usuário alterar o valor de um elemento. Alguns exemplos comuns de uso incluem:

- **Validação de formulários**: Verifique se os campos foram preenchidos corretamente antes de enviar o formulário.
- **Atualização de conteúdo**: Exibir informações diferentes com base na seleção do usuário em um menu suspenso.
- **Geração de relatórios**: Atualizar um gráfico ou tabela com base nos dados inseridos pelo usuário.

### Como utilizar o evento `change`?

Para ouvir um ouvinte de evento `change` a um elemento, você pode usar o método `addEventListener()`:

```
const meuElemento = document.getElementById('meuInput');

meuElemento.addEventListener('change', function() {
  // Código a ser executado quando o evento change ocorrer
  console.log('O valor do elemento foi alterado!');
});
```

### Exemplo prático: Validação de um campo de e-mail

```
<input type="email" id="email" placeholder="Digite seu e-mail">
```
```
const inputEmail = document.getElementById('email');

inputEmail.addEventListener('change', function() {
  const email = inputEmail.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!regex.test(email)) {
    alert('Por favor, digite um endereço de e-mail válido.');
  }
});
```

## Diferença entre `change` e input:

O evento `input` é disparado a cada alteração sem valor do elemento, enquanto o evento `change` é disparado apenas quando a alteração é confirmada. Em muitos casos, o evento `change` é suficiente, mas em situações em que você precisa de ações para cada digitação do usuário, o evento `input` é mais adequado.

### Em resumo:

O evento `change` é uma ferramenta poderosa para criar interfaces web mais interativas e responsivas. Ao entender como ele funciona e quando utilizá-lo, você poderá criar aplicações mais ricas e dinâmicas.

### [Voltar ao menu - JavaScript entendendo promises e asyncawait](../menu.md)