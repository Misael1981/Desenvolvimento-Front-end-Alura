export function calculaImc(peso, altura) {

    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
        return "Peso ou altura inválidos";
    }
    let imc = peso / (altura * altura)
    return imc.toFixed(2)
}