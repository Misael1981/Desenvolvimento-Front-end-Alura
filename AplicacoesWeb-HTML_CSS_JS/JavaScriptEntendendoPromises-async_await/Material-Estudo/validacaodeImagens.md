# Validação de imagens no upload

Quando estamos criando um site ou aplicativo que permite aos usuários fazer upload de imagens, é muito importante garantir que esses arquivos sejam realmente imagens e que tenham um tamanho adequado. Isso ajuda a manter nosso site seguro, rápido e amigável. Para fazer isso, podemos usar JavaScript e HTML5. Vamos explorar como!

## Por que Validar?

Antes de mais nada, vamos entender por que a validação é tão importante:

- **Segurança**: Evita uploads de arquivos maliciosos disfarçados de imagens.
- **Desempenho**: Imagens muito grandes podem deixar seu site lento.
- **Experiência do Usuário**: Garante que o conteúdo seja exibido corretamente para todos os usuários.

## Usando HTML5

HTML5 trouxe várias melhorias para a web, incluindo formas mais fáceis de validar arquivos antes do upload. Veja como você pode fazer isso diretamente no seu formulário de upload:

```
<input type="file" id="imageUpload" accept="image/png, image/jpeg" />
```

O atributo `accept` especifica os tipos de arquivos que o usuário pode selecionar. Isso já é uma forma de validação, pois limita as escolhas a arquivos PNG e JPEG, que são formatos comuns de imagem.

## Usando JavaScript para Validação Avançada

Embora o HTML5 ofereça uma forma básica de validação, podemos usar JavaScript para fazer verificações mais detalhadas, como o tamanho do arquivo. Veja como:

### 1. Capturando o Arquivo

Primeiro, precisamos obter o arquivo que o usuário deseja fazer upload. Isso pode ser feito quando o usuário seleciona um arquivo:

```
document.getElementById('imageUpload').addEventListener('change', function(event) {
  var file = event.target.files[0];
  // Agora temos o arquivo e podemos fazer mais validações
});
```

### 2. Validando o Tipo de Arquivo

Mesmo especificando o atributo `accept` no HTML, é uma boa prática verificar o tipo de arquivo novamente com JavaScript:

```
if (!file.type.match('image/png') && !file.type.match('image/jpeg')) {
  alert('Por favor, selecione uma imagem PNG ou JPEG.');
  return;
}
```

### 3. Verificando o Tamanho do Arquivo

Também é importante verificar o tamanho do arquivo para evitar imagens muito grandes. Isso pode ser feito facilmente com JavaScript:

```
// Vamos limitar o tamanho a 2MB
if (file.size > 2 * 1024 * 1024) {
  alert('A imagem deve ter no máximo 2MB.');
  return;
}
```

## Conclusão

Validar imagens antes do upload é uma prática essencial para qualquer site ou aplicativo que aceite esse tipo de conteúdo. Usando HTML5 e JavaScript, podemos facilmente garantir que apenas arquivos adequados sejam enviados, melhorando a segurança, o desempenho e a experiência do usuário. Experimente implementar essas técnicas no seu próximo projeto!

### [Voltar ao menu - JavaScript entendendo promises e asyncawait](../menu.md)