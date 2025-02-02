export function criaElementosForm() {

    const tdNome = document.createElement('td')
    const tdPeso = document.createElement('td')
    const tdAltura = document.createElement('td')
    const tdGordura = document.createElement('td')
    const tdImc = document.createElement('td')

    const todosTds = {
        tdNome,
        tdPeso,
        tdAltura,
        tdGordura,
        tdImc
    }
    return todosTds
}