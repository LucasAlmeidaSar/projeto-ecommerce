const btnColapsado = document.querySelector('.conteudo__btn-colapsado');
const containerColapsado = document.querySelector('.container-colapsado');  
const itemListaColapsado = document.querySelector('.conteudo__item-lista-colapsado')


export default function colapsar(){    

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

