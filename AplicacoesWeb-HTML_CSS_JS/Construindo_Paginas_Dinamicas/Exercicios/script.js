import { criarElementos } from "./apps/criarElementos.js"
import { criarDataEhora } from "./apps/criarDataEHora.js"

const button = document.getElementById('button')

button.addEventListener('click', event => {
    event.preventDefault()

    criarDataEhora()
    criarElementos()
})