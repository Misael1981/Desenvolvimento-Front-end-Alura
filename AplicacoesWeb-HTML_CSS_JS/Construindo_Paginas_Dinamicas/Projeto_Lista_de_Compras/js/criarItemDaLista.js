import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById('input-item')
let contador = 0

export function criarItemDaLista() {
    const feedback = document.querySelector('.mensagem-lista-vazia')
    if(inputItem.value === "") {
        feedback.classList.add('feddback')
        feedback.innerText = "Favor inserir algo"
        return
    }

    const itemNaLista = document.createElement('li')
    const containerItemNaLista = document.createElement('div')
    containerItemNaLista.classList.add('lista-item-container')
    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = "checkbox"
    inputCheckbox.id = "checkbox" + contador++
    const nomeItem = document.createElement('p')
    nomeItem.innerText = inputItem.value

    inputCheckbox.addEventListener('click', () => {
        if(inputCheckbox.checked) {
            nomeItem.style.textDecoration = 'line-through'
        } else {
            nomeItem.style.textDecoration = 'none'
        }
    })
    
    // CONECTAR COM A ÁRVORE DO DOM

    containerItemNaLista.appendChild(inputCheckbox)
    containerItemNaLista.appendChild(nomeItem)

    itemNaLista.appendChild(containerItemNaLista)
    const dataCompleta = gerarDiaDaSemana()

    const itemData = document.createElement('p')
    itemData.innerText = dataCompleta
    itemData.classList.add('texto-data')
    itemNaLista.appendChild(itemData)

    return itemNaLista;
}