const menuTopo = document.querySelector('.nav-principal__menu-topo')
const dropdownConteudo = document.querySelector('.dropdown-conteudo')
const btnTopo = document.querySelectorAll('.btn-nav')
const iconeTopo = document.querySelectorAll('.icone-nav')



export default function scrollPagina() {
    
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollElementos('ativar', menuTopo, dropdownConteudo, btnTopo, iconeTopo)
    }else{
        scrollElementos('desativar', menuTopo, dropdownConteudo, btnTopo, iconeTopo)        
    }
}


function scrollElementos (operacao, ...elementos) {
   for (const elemento of elementos) {

        if (elemento.length) {    
            varrerColecaoEncontrada(operacao, elemento)
        }else{
            operacao === 'ativar' ? elemento.classList.add('on-scroll') : elemento.classList.remove('on-scroll')
        }
   }
}


function varrerColecaoEncontrada(operacao, elementos){
    if(operacao === 'ativar'){
        for (const elemento of elementos) {
            elemento.classList.add('on-scroll')
        }
    }
    else if(operacao === 'desativar'){
        for (const elemento of elementos) {
            elemento.classList.remove('on-scroll')
        }
    } 
}