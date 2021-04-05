import classesDosElementos from './util.js'

// Elementos
const btnColapsado = document.querySelector('.conteudo__btn-colapsado');
const containerColapsado = document.querySelector('.container-colapsado');  
const itemListaColapsado = document.querySelector('.conteudo__item-lista-colapsado')
const menuCelular = document.querySelector('.nav-principal__menu-celular')
const botoesMenuCelular = document.querySelectorAll('.js-btnMenuCelular')
const mainHeaderFooter = document.querySelectorAll('.js-conteudoPai')


export default function ativarEfeitosDoMenuCelular() { 
    btnColapsado.addEventListener('click' , exibirOcultarMenuColapsado)
    for (const botao of botoesMenuCelular){
        botao.addEventListener('click' , exibirOcultarMenuCelular)
    }    
}


function exibirOcultarMenuColapsado(){  
    classesDosElementos.alternar('ativo' , itemListaColapsado, btnColapsado)
    var altura = containerColapsado.style.height
    altura === '140px' ? altura = '0px' : altura = '140px'
    containerColapsado.style.height = altura        
}


function exibirOcultarMenuCelular() {
    classesDosElementos.alternar('inativo', menuCelular)
    classesDosElementos.alternar('blur', mainHeaderFooter)       
}