let menuTopo = document.querySelector('.nav-principal__menu-topo')
let btnTopo = document.getElementsByClassName('btn-nav')
let iconeTopo = document.getElementsByClassName('icone-nav')


window.onscroll = () => scrollPagina()

function scrollPagina() {
    
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollElementoUnico(true, menuTopo)       
        scrollVariosElementos(true, btnTopo)
        scrollVariosElementos(true, iconeTopo)
    }else{
        scrollElementoUnico(false, menuTopo)        
        scrollVariosElementos(false, btnTopo)
        scrollVariosElementos(false, iconeTopo)
    }
}



function scrollVariosElementos(boll, elementos){

    if(boll){
        for (const elemento of elementos) {
            elemento.classList.add('on-scroll')
        }
    }else{
        for (const elemento of elementos) {
            elemento.classList.remove('on-scroll')
        }
    }    
}  



function scrollElementoUnico(bool, ...elements){

    if(bool){
        for (element of elements) {
            element.classList.add('on-scroll')
        }
    }else{
        for (element of elements) {
            element.classList.remove('on-scroll')
        }
    }
}