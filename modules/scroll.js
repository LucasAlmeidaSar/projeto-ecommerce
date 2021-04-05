import classesDosElementos from './util.js'

// Elementos
const itensMenuTopo = document.querySelectorAll('.js-itensMenuTopo')


export default function ativarEfeitosDeScroll() {
    
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        classesDosElementos.adicionar('on-scroll', itensMenuTopo)
    }else{
        classesDosElementos.remover('on-scroll', itensMenuTopo) 
    }

}