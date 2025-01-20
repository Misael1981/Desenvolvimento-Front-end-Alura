# Diferentes métodos de integração de JavaScript

Quando estamos desenvolvendo um site ou uma aplicação web, muitas vezes precisamos usar JavaScript para adicionar interatividade e funcionalidades dinâmicas. Existem diferentes maneiras de integrar JavaScript em nossos projetos, e cada uma delas tem suas próprias características e implicações de desempenho. Vamos explorar os **três métodos principais: inline, interno e externo**.

## 1. JavaScript Inline

### O que é?

O JavaScript inline é quando você escreve o código JavaScript diretamente dentro de um elemento HTML. Isso é feito usando o atributo `onclick`, `onmouseover`, ou outros eventos HTML.

### Exemplo:

```
<button onclick="alert('Olá, mundo!')">Clique aqui</button>
```

- **Vantagens**:

    - **Simplicidade**: É fácil de adicionar e entender para pequenos trechos de código.
    - **Rápido para protótipos**: Útil para testes rápidos ou protótipos.

- **Desvantagens:

    - **Manutenção difícil**: O código fica espalhado pelo HTML, tornando difícil a manutenção e a leitura.
    - **Reutilização limitada**: Não é fácil reutilizar o código em diferentes partes do projeto.
    - **Desempenho**: Pode afetar o desempenho, pois o navegador precisa processar o JavaScript sempre que encontra um elemento com código inline.

## 2. JavaScript Interno

### O que é?

O JavaScript interno é quando você escreve o código JavaScript dentro de uma tag `<script>` no próprio arquivo HTML.

### Exemplo:

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de JavaScript Interno</title>
    <script>
        function mostrarMensagem() {
            alert('Olá, mundo!');
        }
    </script>
</head>
<body>
    <button onclick="mostrarMensagem()">Clique aqui</button>
</body>
</html>
```

- **Vantagens**:

    - **Organização**: O código JavaScript está separado do HTML, mas ainda no mesmo arquivo.
    - **Facilidade de uso**: Mais fácil de gerenciar do que o JavaScript inline para projetos pequenos.

- **Desvantagens**:

    - **Desempenho**: O arquivo HTML pode ficar grande, o que pode afetar o tempo de carregamento.
    - **Reutilização**: O código ainda está preso ao arquivo HTML específico.

## 3. JavaScript Externo

### O que é?

O JavaScript externo é quando você escreve o código JavaScript em um arquivo separado com a extensão `.js` e o inclui no HTML usando a tag `<script>` com o atributo `src`.

### Exemplo:

Arquivo HTML:

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de JavaScript Externo</title>
    <script src="script.js"></script>
</head>
<body>
    <button onclick="mostrarMensagem()">Clique aqui</button>
</body>
</html>
```

### Arquivo `script.js`:

```
function mostrarMensagem() {
    alert('Olá, mundo!');
}
```

- **Vantagens**:

    - **Manutenção**: O código está separado, facilitando a manutenção e a leitura.
    - **Reutilização**: O mesmo arquivo JavaScript pode ser usado em várias páginas.
    - **Desempenho**: O navegador pode armazenar em cache o arquivo JavaScript, melhorando o tempo de carregamento em visitas subsequentes.

- **Desvantagens**:

    - **Configuração inicial**: Requer mais configuração inicial, pois você precisa gerenciar arquivos separados.
    - **Dependência de rede**: Se o arquivo JavaScript não estiver disponível (por exemplo, devido a problemas de rede), a funcionalidade pode ser afetada.

### [Voltar ao Menu - JavaScript: construindo páginas dinâmicas](../menu.md)