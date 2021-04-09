import classesDosElementos from './util.js'

function ativarEfeitosAoCarregar() {
    
    const nav = document.querySelector('.nav-principal')
    const itensCabecalho = document.querySelectorAll('.js-itensCabecalho')

    classesDosElementos.remover('pre-load', nav, itensCabecalho)

}

export default ativarEfeitosAoCarregar