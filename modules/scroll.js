import classesDosElementos from './util.js'


// Elementos
const menuTopo = document.querySelector('.nav-principal__menu-topo')
const dropdownConteudo = document.querySelector('.dropdown-conteudo')
const btnTopo = document.querySelectorAll('.btn-nav')
const iconeTopo = document.querySelectorAll('.icone-nav')
const navCelular = document.querySelector('.nav-principal__menu-topo-sm')
const btnNacCelular = document.querySelector('.menu-topo-sm__btn')


export default function ativarEfeitosDeScroll() {
    
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        classesDosElementos.adicionar('on-scroll', menuTopo, dropdownConteudo, btnTopo, iconeTopo, navCelular, btnNacCelular)
    }else{
        classesDosElementos.remover('on-scroll', menuTopo, dropdownConteudo, btnTopo, iconeTopo, navCelular, btnNacCelular) 
    }

}