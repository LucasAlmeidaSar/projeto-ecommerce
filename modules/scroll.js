const menuTopo = document.querySelector('.nav-principal__menu-topo')
const btnTopo = document.getElementsByClassName('btn-nav')
const iconeTopo = document.getElementsByClassName('icone-nav')
const dropdownConteudo = document.querySelector('.dropdown-conteudo')



export default function scrollPagina() {
    
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollElementos(true, menuTopo, dropdownConteudo, btnTopo, iconeTopo)        
    }else{
        scrollElementos(false, menuTopo, dropdownConteudo, btnTopo, iconeTopo)        
    }
}

function scrollElementos (bool, ...elementos) {
   for (const elemento of elementos) {

        if (elemento.length !== undefined) {    
            varrerColecaoEncontrada(bool, elemento)
        }else{
             bool == true ? elemento.classList.add('on-scroll') : elemento.classList.remove('on-scroll')
        }
   }
}

function varrerColecaoEncontrada(bool, elementos){
    if(bool){
        for (const elemento of elementos) {
            elemento.classList.add('on-scroll')
        }
    }else{
        for (const elemento of elementos) {
            elemento.classList.remove('on-scroll')
        }
    } 
}