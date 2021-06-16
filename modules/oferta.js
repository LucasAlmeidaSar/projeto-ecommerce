const urlOferta = "http://localhost:8080"
const qtdProdutos = 6
const gridProdutosOferta = document.querySelector('[data-js="produtosOferta"]')

const getProdutosEmOferta = async () => await (await fetch(`${urlOferta}/api/roupas/recentes?limite=${qtdProdutos}`)).json()

const inserirProdutosEmOferta = async () => {
  const arrayProdutos = await getProdutosEmOferta()
  
  const html = arrayProdutos.reduce((html, produto) => {

    if (produto.quantidadeTotal > 0) {
      const inputsDeCor = produto.modelos.reduce((lista, {cor, imagens}) => {
        lista += `
        <li> 
          <a class="card__cor" 
            style="background-color: ${cor.valor};" 
            title="${cor.nome}"
            data-imagem="${imagens[0].path}"
            href="javascript:void(0)">
          </a> 
        </li>
        `
        
        return lista
      }, '')
  
      html += `
        <div class="card">                   
        <a href="../pages/detalheProduto.html?idProduto=${produto.id}">
          <div class="card__imagem" style="background-image: url(${urlOferta}${produto.modelos[0].imagens[0].path});"></div>
        </a>   
        <div class="card__descricao">
        <ul class="flex">
          ${inputsDeCor}
        </ul>
          <h3 class="card__titulo">${produto.descricao}</h3>
          <p class="card__subtitulo">R$${produto.preco}</p>        
        </div>
      </div>
        `
    }    
    return html

  } , '')

  gridProdutosOferta.innerHTML = html

}

inserirProdutosEmOferta()


// Alterar Imagem de acordo com input de cor - Input de cor
gridProdutosOferta.addEventListener('click', event => {
  let btnClicado = event.target 

  if (btnClicado.className === 'card__cor') {
    const backgroundImage = `url(${urlOferta}${btnClicado.getAttribute('data-imagem')})`
    const li = btnClicado.parentElement
    const ul = li.parentElement
    const descricao = ul.parentElement
    const card = descricao.parentElement
    const imagem = card.children[0].children[0]

    imagem.style.backgroundImage = backgroundImage
  }

})