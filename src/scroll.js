let menuTopo = document.querySelector('.nav-principal__menu-topo')
let btnTopo = document.getElementsByClassName('btn-nav')
let iconeTopo = document.getElementsByClassName('icone-nav')
let dropdownConteudo = document.querySelector('.dropdown-conteudo')


window.onscroll = () => scrollPagina()

function scrollPagina() {

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollarElementos(true, menuTopo, dropdownConteudo)
        scrollarColecaoDeElementos(true, btnTopo, iconeTopo)
    } else {
        scrollarElementos(false, menuTopo, dropdownConteudo)
        scrollarColecaoDeElementos(false, btnTopo, iconeTopo)
    }
}





function scrollarElementos(bool, ...elementos) {

    if (bool) {
        for (elemento of elementos) {
            elemento.classList.add('on-scroll')
        }
    } else {
        for (elemento of elementos) {
            elemento.classList.remove('on-scroll')
        }
    }
}




function scrollarColecaoDeElementos(boll, ...elementos) {

    for (elemento of elementos) {
        varrerColecaoEncontrada(boll, elemento)
    }

}




function varrerColecaoEncontrada(bool, elementos) {
    if (bool) {
        for (elemento of elementos) {
            elemento.classList.add('on-scroll')
        }
    } else {
        for (elemento of elementos) {
            elemento.classList.remove('on-scroll')
        }
    }
}