const vitrinelist = document.querySelector('[data-js="vitrinelist"]')
const vitrine = document.querySelector('[data-js="vitrine"]')
const api = "http://localhost:8080"

// Carregar com filtro de genero aplicado - Filtro Genero
function resgatarProduto() {
  return localStorage.getItem('idProduto')
}

const idProduto = resgatarProduto()
onload = () => {
  if (idProduto === 'null' || !idProduto) {
    console.log('Não há produto a ser exibido');    
  }else{   
    
    const getProdutoUnico = async () => await (await fetch(`${api}/api/roupas/${idProduto}`)).json()

    const inserirProdutoUnico = async () => {
      const produto = await getProdutoUnico()
      console.log(produto);
      vitrine.setAttribute('src', `${api}${produto.modelos[0].imagens[0].path}`)
    }
    inserirProdutoUnico()       
  }
  localStorage.setItem('idProduto', 'null')   
}
