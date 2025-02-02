export function obtemPacienteDoFormulario() {
    const nome = document.querySelector('.info-nome')
    const peso = document.querySelector('.info-peso')
    const altura = document.querySelector('.info-altura')
    const gordura = document.querySelector('.info-gordura')

    const paciente = {
        nome,
        peso,
        altura,
        gordura
    }
    return paciente
}