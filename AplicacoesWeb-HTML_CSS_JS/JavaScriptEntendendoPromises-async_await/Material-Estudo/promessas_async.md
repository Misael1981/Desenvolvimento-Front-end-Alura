# Promessas e async

Quando você começa a explorar o mundo da programação JavaScript, especialmente no desenvolvimento web, logo se depara com conceitos como assincronia. Isso significa fazer coisas ao mesmo tempo sem que uma atrapalhe a outra, como carregar uma imagem enquanto você lê este texto. Vamos explorar alguns conceitos que derivam do Javascript assíncrono.

## Promises

Quando você está aprendendo JavaScript, um dos conceitos mais úteis e, às vezes, um pouco complicados de entender são as Promises. Mas não se preocupe! Vamos descomplicar esse assunto juntos. Imagine que você pediu uma pizza e o atendente disse que ela chegaria em 30 minutos. Essa "promessa" de entrega da pizza é muito parecida com as Promessas em JavaScript. Elas são usadas para lidar com operações que levam algum tempo para serem concluídas, como buscar dados de uma API na internet.

## O que são Promessas?

Uma Promessa em JavaScript é um objeto que representa o sucesso ou a falha de uma operação assíncrona. Assíncrono significa que algo pode acontecer agora ou no futuro, mas não impede outras operações de acontecerem enquanto isso. As Promessas têm três estados:

- **Pendente (Pending)**: Quando a Promessa é criada e a operação ainda não foi concluída.
- **Realizada (Fulfilled)**: Quando a operação assíncrona é concluída com sucesso.
- **Rejeitada (Rejected)**: Quando a operação falha.

## Criando uma Promessa

Para criar uma Promessa, você usa o construtor new Promise(), que recebe uma função com dois parâmetros: resolve e reject. Veja um exemplo simples:

```
let promessaDePizza = new Promise(function(resolve, reject) {
  // Simulando a entrega da pizza
  let pizzaEntregue = true; // Tente mudar para false e veja o que acontece
  if (pizzaEntregue) {
    resolve('Pizza entregue com sucesso!');
  } else {
    reject('Entrega da pizza falhou.');
  }
});
```

As Promessas são uma parte fundamental do JavaScript moderno, especialmente quando você está lidando com operações assíncronas.

## Async/await

No JavaScript, uma das formas mais elegantes de lidar com operações assíncronas é usando async/await. Uma função async é uma função que retorna uma promessa, e o await é usado para esperar por essa promessa ser resolvida (ou seja, completada) antes de continuar com o próximo passo. Isso nos permite escrever código assíncrono que parece síncrono, tornando-o mais legível e fácil de entender.

```
async function buscarDados() {
  const resposta = await fetch('https://api.exemplo.com/dados');
  const dados = await resposta.json();
  console.log(dados);
}
```

## Melhores Práticas

- **Tratamento de Erros**: Sempre use try/catch ao usar await para lidar com possíveis erros de forma elegante.
- **Evite Await em Loop**: Usar await dentro de loops pode levar a um desempenho ruim, pois espera-se que cada operação seja concluída antes de iniciar a próxima. Considere alternativas como Promise.all.
- **Código Limpo**: Embora async/await torne o código mais legível, ainda é importante manter seu código organizado e evitar aninhamentos profundos.

Dominar async/await e entender como gerenciar múltiplas operações assíncronas pode significativamente melhorar a eficiência e a legibilidade do seu código. Experimente esses padrões e práticas em seus projetos e veja a diferença que eles podem fazer. Lembre-se, a prática leva à perfeição, então continue explorando e experimentando.

### [Voltar ao menu - JavaScript entendendo promises e asyncawait](../menu.md)