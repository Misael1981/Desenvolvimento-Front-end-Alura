const uploadBtn = document.getElementById('button__upload-image')
const inputUploadImage = document.getElementById('image-upload')

uploadBtn.addEventListener('click', () => {
    inputUploadImage.click()
})

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader()
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name })
        }
        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }
        leitor.readAsDataURL(arquivo)
    })
}

const imagemPrincipal = document.querySelector('.mainImage')
const nomeDaImagem = document.querySelector('.container-image__nome p')

inputUploadImage.addEventListener('change', async (evento) => {
    const arquivo = evento.target.files[0]

    if(arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo)
            imagemPrincipal.src = conteudoDoArquivo.url
            nomeDaImagem.textContent = conteudoDoArquivo.name
        } catch(error) {
            console.error('Erro na leitura do arquivo')
        }
    }
})