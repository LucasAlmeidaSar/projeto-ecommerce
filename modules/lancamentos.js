const urlServer = "http://localhost:8080"
const limiteDeProdutos = 9
const cardsCarrossel = document.querySelector('[data-js="cardsCarrossel"]')

const getRoupas = async () => await (await fetch(`${urlServer}/api/roupas/recentes?limite=${limiteDeProdutos}`)).json()

const inserirCards = async () => {
  const arrayProdutos = await getRoupas()
  
  const html = arrayProdutos.reduce((html, produto) => {
    html += `
    <div class="card">
      <a href="../pages/detalheProduto.html" onclick="guardarProduto(${produto.id})">
          <img class="imagem card__imagem" src=${urlServer}${produto.modelos[0].imagens[0].path} alt=${produto.descricao}>
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