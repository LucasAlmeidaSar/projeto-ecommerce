import classesDosElementos from './util.js'

// Elementos
const btnColapsado = document.querySelector('.conteudo__btn-colapsado');
const containerColapsado = document.querySelector('.container-colapsado');  
const itemListaColapsado = document.querySelector('.conteudo__item-lista-colapsado')
const btnAbrirMenuCelular = document.querySelector('.menu-topo-sm__btn')
const menuCelular = document.querySelector('.nav-principal__menu-celular')
const btnFecharMenuCelular= document.querySelector('.menu-celular__btn-fechar')
const cabecalho = document.querySelector('.cabecalho-principal')
const main = document.querySelector('.conteudo-principal')
const rodape = document.querySelector('.rodape')



export default function ativarEfeitosDoMenuCelular() { 

    btnColapsado.addEventListener('click' , exibirOcultarMenuColapsado)
    btnAbrirMenuCelular.addEventListener('click', exibirOcultarMenuCelular)
    btnFecharMenuCelular.addEventListener('click', exibirOcultarMenuCelular)
    
}


function exibirOcultarMenuColapsado(){  

    classesDosElementos.alternar('ativo' , itemListaColapsado, btnColapsado)
    var altura = containerColapsado.style.height
    altura === '140px' ? altura = '0px' : altura = '140px'
    containerColapsado.style.height = altura    
    
}


function exibirOcultarMenuCelular() {

    classesDosElementos.alternar('inativo', menuCelular)
    classesDosElementos.alternar('blur', cabecalho, main, rodape)   
    
}

