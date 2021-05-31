const gridProdutos = document.querySelector('[data-js="gridProdutos"]')
const listaCores = document.querySelector('[data-js="filtroCores"]')
const listaCategorias = document.querySelector('[data-js="listaCategorias"]')

const url = "http://coldythegreat.ddns.net:8080"

const getProdutos = async () => await (await fetch(`${url}/api/roupas/?ativo=true`)).json()

const inserirProdutos = async () => {
  const resposta = await getProdutos()
  const arrayProdutos = resposta.content  

  console.log('Filtro Camisa:',arrayProdutos.filter(({categoria}) => categoria.nome === 'Camisa'))
  
  const html = arrayProdutos.reduce((html, {modelos, descricao, preco}) => {
    const listaInputCores = modelos.reduce((lista, {cor, imagens}) => {
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
      <img src=${url}${modelos[0].imagens[0].path} alt="${descricao}" class="imagem card__imagem">
      <div class="card__descricao">
        <ul class="flex">
         ${listaInputCores}
        </ul>  
        <h3 class="card__titulo">${descricao}</h3>
        <p class="card__subtitulo">R$${preco}</p>                
      </div>
    </div>
    `
    return html
  } , '')

  gridProdutos.innerHTML = html
}





// Carregar com filtro de genero aplicado - Filtro Genero
function resgatarGenero() {
  return localStorage.getItem('genero')
}

  let inputGenero = genero => document.querySelector(`[data-name="${genero}"]`)

  const genero = resgatarGenero()
  onload = () => {
    if (genero === 'todos') {
      inserirProdutos()
    }else{      
      let input = inputGenero(genero)
      console.log(genero)
      filtrarPorGenero(genero)
      btnLimpaFiltros.classList.add('ativo')
      input.classList.add('ativo')
      localStorage.setItem('genero', 'todos')
    }
  }





 const getCores = async () => await (await fetch(`${url}/api/cores`)).json()

const inserirCores = async () => {
  const cores = await getCores()
  
  const html = cores.reduce((html, {nome, valor}) => {
    html += `
    <li class="item-lista-cor">
      <button class="nome-filtro" title="${nome}" style="background-color:${valor}"></button>
    </li>
    `
    return html
  } , '')

  listaCores.innerHTML = html
}

inserirCores()





const getCategorias = async () => await (await fetch(`${url}/api/categorias`)).json()

const inserirCategorias = async () => {
  const categorias = await getCategorias()

  const html = categorias.reduce((html, {nome}) => {
    html += `
    <li class="filtro-container">
      <button class="nome-filtro">${nome}</button>
    </li>
    `
    return html
  } , '')

  listaCategorias.innerHTML = html
}

inserirCategorias()





const filtrosGenero = document.querySelectorAll('[data-js="filtroGenero"]')
const btnLimpaFiltros = document.querySelector('[data-js="btnLimpaFiltros"]')

btnLimpaFiltros.addEventListener('click', () => {
  resetarTodos()
  btnLimpaFiltros.classList.remove('ativo')
  inserirProdutos()
})

ativarGeneroSelecionado()

function ativarGeneroSelecionado(){
  filtrosGenero.forEach(btn => btn.addEventListener("click", () => ativar(btn)))
}

function ativar(btn) {
  resetarTodos()
  btn.classList.add('ativo')
  btnLimpaFiltros.classList.add('ativo')
}

function resetarTodos () {
  filtrosGenero.forEach(btn => btn.classList.remove('ativo'))
}





function filtrarPorGenero(genero) {
    
  const getCategoriaUnica = async () => await (await fetch(`${url}/api/roupas/filtrar?ativo=true&filtro_genero=${genero}`)).json()

  const inserirProdutos = async () => {
    const resposta = await getCategoriaUnica()
    const arrayProdutos = resposta.content  

    const html = arrayProdutos.reduce((html, {modelos, descricao, preco}) => {
      const listaInputCores = modelos.reduce((lista, {cor, imagens}) => {
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
        <img src=${url}${modelos[0].imagens[0].path} alt="${descricao}" class="imagem card__imagem">
        <div class="card__descricao">
          <ul class="flex">
           ${listaInputCores}
          </ul>  
          <h3 class="card__titulo">${descricao}</h3>
          <p class="card__subtitulo">R$${preco}</p>                
        </div>
      </div>
      `
      return html
    } , '')
  
    gridProdutos.innerHTML = html
  }

  inserirProdutos()
}








// Alterar Imagem de acordo com input de cor - Input de cor
gridProdutos.addEventListener('click', event => {
  let btnClicado = event.target
  console.log(btnClicado.className) 

  if (btnClicado.className === 'card__cor') {
    const path = `${url}${btnClicado.dataset.imagem}`
    const li = btnClicado.parentElement
    const ul = li.parentElement
    const descricao = ul.parentElement
    const card = descricao.parentElement
    card.children[0].setAttribute("src", `${path}`)
    console.log('cliucou no inpt');
    console.log(path);
    console.log(card);
  }

})