import { criarItemDaLista } from "./js/criarItemDaLista.js";
import verificarListaVazia from "./js/verificarListaVazia.js";

const botaoIniciar = document.getElementById('adicionar-item')
const listaDeCompras = document.getElementById('lista-de-compras')

botaoIniciar.addEventListener('click', event => {
    event.preventDefault()

    const itemNaLista = criarItemDaLista()
    listaDeCompras.appendChild(itemNaLista)
    verificarListaVazia(listaDeCompras)
})

verificarListaVazia(listaDeCompras)

