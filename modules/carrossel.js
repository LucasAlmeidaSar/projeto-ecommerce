export default function ativarCarrossel() {

    $('.carrossel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        speed: 1000,
        responsive: [
            {
              breakpoint: 1281,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
        ]
    });
}

const url = "http://coldythegreat.ddns.net:8080/"
const limiteDeProdutos = 9
const cardsCarrossel = document.querySelector('[data-js="cardsCarrossel"]')

const getProdutos = async () => await (await fetch(`${url}api/roupas/recentes?limite=${limiteDeProdutos}`)).json()

const inserirCards = async () => {
  const arrayProdutos = await getProdutos()
  
  const html = arrayProdutos.reduce((html, produto) => {
    html += `
    <div class="card">
      <a href="javascript:void(0)">
          <img class="imagem card__imagem" src=${url}${produto.modelos[0].imagens[0].path} alt=${produto.descricao}>
      </a>
      <h3 class="card__titulo">${produto.descricao}</h3>
      <p class="card__subtitulo">R$${produto.preco}</p>
    </div>
    `
    return html

  } , '')

  cardsCarrossel.innerHTML = html

}

inserirCards()