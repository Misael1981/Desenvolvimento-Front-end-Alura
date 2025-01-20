import { criarDataEhora } from "./criarDataEHora.js"

const inputItem = document.getElementById('input-item')

export function criarElementos() {
    const inputValue = inputItem.value
    const divFeedback = document.querySelector('.feedback')
    const pFeedback = document.createElement('p')
    const list = document.querySelector('.list')
    
    if(inputValue === "") {
        pFeedback.innerText = "Favor digitar algo"
        divFeedback.appendChild(pFeedback)
        return
    }
    inputItem.value = ""

    const ulContainerList = document.createElement('ul')
    ulContainerList.classList.add('container-list')
    const liListItem = document.createElement('li')
    liListItem.classList.add('list-item')
    const labelItemContent = document.createElement('label')
    labelItemContent.classList.add('item-content')
    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = "checkbox"
    inputCheckbox.id = "input-checkbox"
    const pdataEHora = document.createElement('p')
    
    const pItemList = document.createElement('p')
    pItemList.innerText = inputValue
    
    inputCheckbox.addEventListener('click', () => {
        if(inputCheckbox.checked) {
            pItemList.style.textDecoration = "line-through"
        } else {
            pItemList.style.textDecoration= "none"
        }
    })

    const data = criarDataEhora()
    pdataEHora.innerText = data
    console.log(data)

    list.appendChild(ulContainerList)
    ulContainerList.appendChild(liListItem)
    liListItem.appendChild(labelItemContent)
    labelItemContent.appendChild(inputCheckbox)
    labelItemContent.appendChild(pItemList)
    labelItemContent.appendChild(pdataEHora)
}