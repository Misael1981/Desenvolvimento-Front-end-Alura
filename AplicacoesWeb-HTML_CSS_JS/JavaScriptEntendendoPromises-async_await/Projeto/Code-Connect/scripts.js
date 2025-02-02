const uploadBtn = document.getElementById('upload-btn')
const inputUpload = document.getElementById('image-upload')

uploadBtn.addEventListener('click', () => {
    inputUpload.click()
})

// Função de leitura dos arquivos

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resove, reject) => {
        const leitor = new FileReader()
        leitor.onload = () => {
            resove({ url: leitor.result, nome: arquivo.name})
        }
        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }
        leitor.readAsDataURL(arquivo)
    })
}

const imagemPrincipal = document.querySelector('.main-imagem')
const nomeDaImagem = document.querySelector('.container-imagem-nome p')

inputUpload.addEventListener('change', async (event) => {
    const arquivo = event.target.files[0]

    if(arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo)
            imagemPrincipal.src = conteudoDoArquivo.url
            nomeDaImagem.textContent = conteudoDoArquivo.name
        } catch(erro) {
            console.error('Erro na leitura do arquivo')
        }
    } 
})