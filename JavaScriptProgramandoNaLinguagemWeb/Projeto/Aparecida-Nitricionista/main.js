import { obtemPacienteDoFormulario } from "./js/obtemPacienteDoFormulario.js";
import { adicionarParciente } from "./js/adicionarPaciente.js";
import { calculaImc } from "./js/calculaImc.js";
import { criaElementosForm } from "./js/criaElementosForm.js";

const paciente = obtemPacienteDoFormulario()

function imprimiImc() {
    const pacientes = document.querySelectorAll('.paciente');

    pacientes.forEach(paciente => {
        const peso = paciente.querySelector('.info-peso').textContent;
        const altura = paciente.querySelector('.info-altura').textContent;

        const imc = calculaImc(peso, altura);

        const imcResultado = paciente.querySelector('.info-imc');
        if(imc === NaN) {
            imcResultado.textContent = imc
        }
        imcResultado.textContent = imc
    });
}
imprimiImc()
adicionarParciente()



