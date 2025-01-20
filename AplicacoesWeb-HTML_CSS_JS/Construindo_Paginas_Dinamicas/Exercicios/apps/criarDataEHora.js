

export function criarDataEhora() {
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', {
        weekday: "long"
    })
    const date = new Date().toLocaleDateString("pt-BR")
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })

    const dataCompleta = `${diaDaSemana} (${date}) às ${hora}`
    return dataCompleta
}