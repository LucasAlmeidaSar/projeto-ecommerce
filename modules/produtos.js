const gridProdutos = document.querySelector('[data-js="gridProdutos"]')
const listaCores = document.querySelector('[data-js="filtroCores"]')
const listaCategorias = document.querySelector('[data-js="listaCategorias"]')

const url = "http://coldythegreat.ddns.net:8080/"

const getProdutos = async () => await (await fetch(`${url}api/roupas/?ativo=true`)).json()

const inserirProdutos = async () => {
  const resposta = await getProdutos()
  const arrayProdutos = resposta.content  

  console.log('Filtro Camisa:',arrayProdutos.filter(produto => produto.categoria.nome === 'Camisa'))
  
  const html = arrayProdutos.reduce((accumulator, produto) => {
    accumulator += `
    <div class="card">
      <img src=${url}${produto.modelos[0].imagens[0].path} alt="${produto.descricao}" class="imagem card__imagem">
      <div class="card__descricao">
        <h3 class="card__titulo">${produto.descricao}</h3>
        <p class="card__subtitulo">R$${produto.preco}</p>          
      </div>
    </div>
    `
    return accumulator
  } , '')

  gridProdutos.innerHTML = html
}

inserirProdutos()



const getCores = async () => await (await fetch(`${url}api/cores`)).json()

const inserirCores = async () => {
  const cores = await getCores()
  
  const html = cores.reduce((html, cor) => {
    html += `
    <li class="item-lista-cor">
      <button class="nome-filtro" title="${cor.nome}" style="background-color:${cor.valor}"></button>
    </li>
    `
    return html
  } , '')

  listaCores.innerHTML = html
}

inserirCores()



const getCategorias = async () => await (await fetch(`${url}api/categorias`)).json()

const inserirCategorias = async () => {
  const categorias = await getCategorias()

  const html = categorias.reduce((html, categoria) => {
    html += `
    <li class="filtro-container">
      <button class="nome-filtro">${categoria.nome}</button>
    </li>
    `
    return html
  } , '')

  listaCategorias.innerHTML = html
}

inserirCategorias()
