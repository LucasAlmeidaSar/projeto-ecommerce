const btnColapsado = document.querySelector('.conteudo__btn-colapsado');
const containerColapsado = document.querySelector('.container-colapsado');  
const itemListaColapsado = document.querySelector('.conteudo__item-lista-colapsado')
const btnCelular = document.querySelector('.menu-topo-sm__btn')
const menuCelular = document.querySelector('.nav-principal__menu-celular')
const btnFecharMenuCelular= document.querySelector('.menu-celular__btn-fechar')


export default function ativarEfeitosDoMenuCelular() {    
    exibirMenuCelular()
    ativarMenuColapsado()
}

function exibirMenuCelular() {
    btnCelular.addEventListener('click', () => {
        menuCelular.classList.toggle('inativo')
    })

    btnFecharMenuCelular.addEventListener('click', () => {
        menuCelular.classList.toggle('inativo')
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