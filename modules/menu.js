// Elementos
const btnColapsado = document.querySelector('.conteudo__btn-colapsado');
const containerColapsado = document.querySelector('.container-colapsado');  
const itemListaColapsado = document.querySelector('.conteudo__item-lista-colapsado')
const btnCelular = document.querySelector('.menu-topo-sm__btn')
const menuCelular = document.querySelector('.nav-principal__menu-celular')
const btnFecharMenuCelular= document.querySelector('.menu-celular__btn-fechar')
const cabecalho = document.querySelector('.cabecalho-principal')
const main = document.querySelector('.conteudo-principal')
const rodape = document.querySelector('.rodape')


export default function ativarEfeitosDoMenuCelular() {    
    exibirMenuCelular()
    ativarMenuColapsado()
}


// Ainda precisa refatorar esse .js !

function exibirMenuCelular() {
    btnCelular.addEventListener('click', () => {
        menuCelular.classList.toggle('inativo')
        cabecalho.classList.toggle('blur')
        main.classList.toggle('blur')
        rodape.classList.toggle('blur')
    })

    btnFecharMenuCelular.addEventListener('click', () => {
        menuCelular.classList.toggle('inativo')
        cabecalho.classList.toggle('blur')
        main.classList.toggle('blur')
        rodape.classList.toggle('blur')
    })

}

function ativarMenuColapsado(){    

    btnColapsado.addEventListener('click', () => {
        itemListaColapsado.classList.toggle('ativo')
        btnColapsado.classList.toggle('ativo')

        if(containerColapsado.style.height === '130px'){
            containerColapsado.style.height = '0px'
        }else{
            containerColapsado.style.height = '130px'
        }

    })
}

