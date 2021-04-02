import alterarClassesDosElementos from './util.js'

// Elementos
const menuTopo = document.querySelector('.nav-principal__menu-topo')
const dropdownConteudo = document.querySelector('.dropdown-conteudo')
const btnTopo = document.querySelectorAll('.btn-nav')
const iconeTopo = document.querySelectorAll('.icone-nav')



export default function ativarEfeitosDeScroll() {
    
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        alterarClassesDosElementos('adicionar', 'on-scroll', menuTopo, dropdownConteudo, btnTopo, iconeTopo)
    }else{
        alterarClassesDosElementos('remover', 'on-scroll', menuTopo, dropdownConteudo, btnTopo, iconeTopo) 
    }

}