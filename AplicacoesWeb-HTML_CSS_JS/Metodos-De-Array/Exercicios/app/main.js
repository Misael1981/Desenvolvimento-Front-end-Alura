let livros = []
const endpointDaApi = '../Exercicios/api/livros.json' 
const listaDeLivros = document.getElementById('livros')
getBuscaLivrosDaAPI()

async function getBuscaLivrosDaAPI() {
    const res = await fetch(endpointDaApi)
    livros = await res.json()
    exibirLivrosNaTela(livros)
    console.table(livros)
}

function exibirLivrosNaTela(livros) {
    livros.forEach(livro => {
        listaDeLivros.innerHTML += `
            <div class="livro" id="livro">
                <img src="${livro.imagem}" alt="">
                <h3>${livro.titulo}</h3>
                <p>${livro.autor}</p>
                <p><span>${livro.preco}</span></p>
                <p>${livro.categoria}</p>
            </div>
        `
    })
}