import { criaElementosForm } from "./criaElementosForm.js"

export function adicionarParciente() {
    const btnAdicionarPaciente = document.querySelector('#adicionar-paciente')
    const form = document.querySelector('#form-adiciona')

    btnAdicionarPaciente.addEventListener('click', event => {
        event.preventDefault()

        const nome = form.nome.value
        const altura = form.altura.value
        const peso = form.peso.value
        const gordura = form.gordura.value
    })
    const elementostd = criaElementosForm()

    elementostd.tdNome.textContent = nome
    elementostd.tdAltura.textContent = altura
    elementostd.tdPeso.textContent = peso
    elementostd.tdGordura.textContent = gordura

    const trPaciente = document.createElement('tr')

    trPaciente.appendChild(elementostd.tdNome)
    trPaciente.appendChild(elementostd.tdAltura)
    trPaciente.appendChild(elementostd.tdPeso)
    trPaciente.appendChild(elementostd.tdGordura)

    console.log(trPaciente)
}