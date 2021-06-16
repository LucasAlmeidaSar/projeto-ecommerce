const gridProdutos = document.querySelector('[data-js="gridProdutos"]')
const listaCores = document.querySelector('[data-js="filtroCores"]')
const listaCategorias = document.querySelector('[data-js="listaCategorias"]')

const url = "http://localhost:8080"



// Carregar todos produtos cadastrados
const getProdutos = async () => await (await fetch(`${url}/api/roupas/?ativo=true`)).json()

const inserirProdutos = async () => {
  const resposta = await getProdutos()
  const arrayProdutos = resposta.content  
  
  const html = arrayProdutos.reduce((html, {id, modelos, descricao, preco, quantidadeTotal}) => {
    
    if (quantidadeTotal > 0) {
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
        <a href="../pages/detalheProduto.html?idProduto=${id}">
          <img src=${url}${modelos[0].imagens[0].path} alt="${descricao}" class="imagem card__imagem">     
        </a>
        <div class="card__descricao">
          <ul class="flex">
           ${listaInputCores}
          </ul>  
          <h3 class="card__titulo">${descricao.substr(0,25)}</h3>
          <p class="card__subtitulo">R$${preco}</p>
                       
        </div>
      </div>
      `
     
    }
    return html
    
  } , '')

  gridProdutos.innerHTML = html
}





// Carregar com filtro de genero aplicado - Filtro Genero
function resgatarGenero() {
  return localStorage.getItem('genero')
}

  let inputGenero = genero => document.querySelector(`[data-id="${genero}"]`)

  const genero = resgatarGenero()
  onload = () => {
    if (genero === 'todos') {
      inserirProdutos()
    }else{      
      let input = inputGenero(genero)
      // filtrarPorGenero(genero)
      input.classList.add('ativo')
      generoAtivo = `&filtro_genero=${input.getAttribute('data-id')}`  
      filtrarProdutos()    
      btnLimpaFiltros.classList.add('ativo')      
      localStorage.setItem('genero', 'todos')
    }
  }






// Carregar Cores na seção de filtro de cores
const getCores = async () => await (await fetch(`${url}/api/cores`)).json()

const inserirCores = async () => {
  const cores = await getCores()
  const coresAtivas = cores.filter(cor => cor.temRegistros)
  
  const html = coresAtivas.reduce((html, {id, nome, valor}) => {
    html += `
    <li class="item-lista-cor">
      <button class="nome-filtro" 
        title="${nome}" 
        data-id="${id}"
        style="background-color:${valor}"></button>
    </li>
    `
    return html
  } , '')

  listaCores.innerHTML = html
}

inserirCores()





// Carregar categorias na seção de filtro de categorias
const getCategorias = async () => await (await fetch(`${url}/api/categorias`)).json()

const inserirCategorias = async () => {
  const categorias = await getCategorias()
  const categoriasAtivas = categorias.filter(categoria => categoria.temRegistros)

  const html = categoriasAtivas.reduce((html, {id, nome}) => {
    html += `
    <li class="filtro-container">
      <button 
        class="nome-filtro"
        data-id="${id}">
          ${nome}
        </button>
    </li>
    `
    return html
  } , '')

  listaCategorias.innerHTML = html
}

inserirCategorias()




// Ativação dos botões de filtro
const filtrosGenero = document.querySelectorAll('[data-js="filtroGenero"]')
const filtroCor = document.querySelector('.conteudo-colapsado.cores')
const filtroCategoria = document.querySelector('.conteudo-colapsado.categorias')
const filtroGenero = document.querySelector('.conteudo-colapsado.generos')
const btnLimpaFiltros = document.querySelector('[data-js="btnLimpaFiltros"]')

var generoAtivo = ''
var categoriaAtiva = ''
var corAtiva = ''

btnLimpaFiltros.addEventListener('click', () => {
  resetarTodosGeneros()
  resetarTodasCategorias()
  resetarTodasCores()
  btnLimpaFiltros.classList.remove('ativo') 
  inserirProdutos()
  generoAtivo = ''
  categoriaAtiva = ''
  corAtiva = ''
})

ativarGeneroSelecionado()
ativarCategoriaSelecionada()
ativarCorSelecionada()

function ativarGeneroSelecionado(){ 
  filtroGenero.addEventListener('click', event => {
    const btnClicado = event.target   
    if(btnClicado.tagName === 'BUTTON'){
      ativarGenero(btnClicado)
      generoAtivo = `&filtro_genero=${btnClicado.getAttribute('data-id')}`  
      filtrarProdutos()     
    }
  })

}

function ativarCategoriaSelecionada(){ 
  filtroCategoria.addEventListener('click', event => {
    const btnClicado = event.target   
    if(btnClicado.tagName === 'BUTTON'){
      ativarCategoria(btnClicado)
      categoriaAtiva = `&filtro_categoria=${btnClicado.getAttribute('data-id')}`  
      filtrarProdutos()     
    }
  })
}

function ativarCorSelecionada(){ 
  filtroCor.addEventListener('click', event => {
    const btnClicado = event.target   
    if(btnClicado.tagName === 'BUTTON'){
      ativarCor(btnClicado)
      corAtiva = `&filtro_cor=${btnClicado.getAttribute('data-id')}`  
      filtrarProdutos()     
    }
  })
}

function ativarGenero(btn) {
  resetarTodosGeneros()
  btn.classList.add('ativo')
  btnLimpaFiltros.classList.add('ativo')
}

function ativarCategoria(btn) {
  resetarTodasCategorias()
  btn.classList.toggle('ativo')
  btnLimpaFiltros.classList.add('ativo')
}

function ativarCor(btn) {
  resetarTodasCores()
  btn.classList.add('ativo')
  btnLimpaFiltros.classList.add('ativo')
}

function resetarTodosGeneros () {
  const lis = filtroGenero.children[0].children
  Array.from(lis).forEach(li => li.children[0].classList.remove('ativo'))
  // filtrosGenero.forEach(btn => btn.classList.remove('ativo'))
}

function resetarTodasCores () {
  const lis = filtroCor.children[0].children
  Array.from(lis).forEach(li => li.children[0].classList.remove('ativo'))
}

function resetarTodasCategorias () {
  const lis = filtroCategoria.children[0].children
  Array.from(lis).forEach(li => li.children[0].classList.remove('ativo'))
}








// Alterar Imagem de acordo com input de cor - Input de cor
gridProdutos.addEventListener('click', event => {
  let btnClicado = event.target 

  if (btnClicado.className === 'card__cor') {
    const path = `${url}${btnClicado.getAttribute('data-imagem')}`
    const li = btnClicado.parentElement
    const ul = li.parentElement
    const descricao = ul.parentElement
    const card = descricao.parentElement
    const link = card.children[0]
    const imagem = link.children[0]
    imagem.setAttribute("src", `${path}`)
    console.log('cliucou no input de cor');
  }

})








// Funcionamento dos filtros em geral
function filtrarProdutos() {

  filtroCategoria.addEventListener('click', event => {
    const btnClicado = event.target   
    if(btnClicado.tagName === 'BUTTON'){
      categoriaAtiva = `&filtro_categoria=${btnClicado.getAttribute('data-id')}` 
    }
  })

  filtroCor.addEventListener('click', event => {
    const btnClicado = event.target   
    if(btnClicado.tagName === 'BUTTON'){
      corAtiva = `&filtro_cor=${btnClicado.getAttribute('data-id')}`
    }
  })

  filtroGenero.addEventListener('click', event => {
    const btnClicado = event.target   
    if(btnClicado.tagName === 'BUTTON'){
      generoAtivo = `&filtro_genero=${btnClicado.getAttribute('data-id')}`       
    }
  })


  const urlFiltro = `/api/roupas/filtrar?ativo=true${categoriaAtiva}${generoAtivo}${corAtiva}`
  const getProdutosFiltrados = async () => 
    await (await fetch(`${url}${urlFiltro}`)).json()

  const inserirProdutos = async () => {
    const resposta = await getProdutosFiltrados()
    console.log(urlFiltro);
    const arrayProdutos = resposta.content  

    const html = arrayProdutos.reduce((html, {id, modelos, descricao, preco, quantidadeTotal}) => {
      if (quantidadeTotal > 0) {
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
          <a href="../pages/detalheProduto.html?idProduto=${id}">
            <img src=${url}${modelos[0].imagens[0].path} alt="${descricao}" class="imagem card__imagem">     
          </a>
          <div class="card__descricao">
            <ul class="flex">
             ${listaInputCores}
            </ul>  
            <h3 class="card__titulo">${descricao.substr(0,25)}</h3>
            <p class="card__subtitulo">R$${preco}</p>   
            
          </div>
        </div>
        `
       
      }
      return html
      
    } , '')
  
    gridProdutos.innerHTML = html
  }

  inserirProdutos()
}

gridProdutos.addEventListener('click', event => {
  let btnClicado = event.target 

  if (btnClicado.getAttribute('data-js') === 'btnAdd') {
    guardarNoCarrinho(`${btnClicado.getAttribute('data-id')}`)
  }

})
