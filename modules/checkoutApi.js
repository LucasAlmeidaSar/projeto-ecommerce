const urlCheckout = "http://localhost:8080"
const listaProdutos = document.querySelectorAll('[data-js="listaProdutos"]')
var produtosLocalStorage = []
const valorTotal = document.querySelectorAll('[data-js="valorTotal"]')
const valorSubtotal = document.querySelectorAll('[data-js="subTotal"]')
const qtdProdutos = document.querySelector('[data-js="qtdProdutos"]')
const frete = document.querySelectorAll('[data-js="frete"]')

onload = () => {
  if (localStorage.hasOwnProperty("produtos")) {
    produtosLocalStorage = JSON.parse(localStorage.getItem("produtos"))
    if (produtosLocalStorage.length == 0) {
      console.log('Produtos zerados!');
      listaProdutos.forEach( lista => lista.innerHTML = '<h2>Não há produtos em seu carrinho!</h2>')
    }else{
      var html = ''
      listaProdutos.forEach( lista => lista.innerHTML = html)
      var valorFinal = 0
    
      produtosLocalStorage.forEach(produto => {
        const getProdutosCheckout = async () => await (await fetch(`${urlCheckout}/api/roupas/${produto.id}`)).json()
        
      
        const inserirProdutosCheckout = async () => {
          const produtoCheckout = await getProdutosCheckout()
          console.log(produtoCheckout);             
          
          const modeloFiltradoPorModelo = produtoCheckout.modelos.filter(modelo => modelo.id == produto.idCor)   
          
          html += `
            <li class="item-produto flex">                   
              <div class="flex">
                <img class="imagem-produto" src="${urlCheckout}${modeloFiltradoPorModelo[0].imagens[0].path}">
                <div class="info-produto-container">
                  <p class="info-produto">${produtoCheckout.descricao}</p>
                  <p class="info-produto">${modeloFiltradoPorModelo[0].cor.nome} | ${produto.idTamanho}</p>
                  <p class="quantidade-produto">Qtd: ${produto.qtd}</p>
                </div>
              </div>
              <p class="valor-produto">R$ ${(produtoCheckout.preco*produto.qtd).toFixed(2)}</p>
            </li>
          `        
          listaProdutos.forEach( lista => lista.innerHTML = html)
          valorFinal += produtoCheckout.preco*produto.qtd
          valorTotal.forEach(total => total.innerHTML = (valorFinal + parseFloat(frete[0].innerHTML)).toFixed(2))
          valorSubtotal.forEach(subtotal => subtotal.innerHTML = valorFinal.toFixed(2))
        }          
        
        inserirProdutosCheckout()
      })
    
    
    

    // const html = produtosCarrinho.reduce((html, produto) => {
    //   const getProdutosCarrinho = async () => await (await fetch(`${urlCarrinho}/api/roupas/${produto.id}`)).json()
    
    //   const inserirProdutosNoCarrinho = async () => {
    //     const produtoCarrinho = await getProdutosCarrinho()
        
    //     const modeloFiltradoPorModelo = produtoCarrinho.modelos.filter(modelo => modelo.id == produto.idCor)        

    //     console.log('produto:',produto);
    //     console.log('produtoCarrinho:',produtoCarrinho);
    //     console.log('modeloFiltradoPorModelo:',modeloFiltradoPorModelo);


    //     html += `
    //       <div class="carrinho-externo__container flex">
    //       <div class="carrinho-externo__img flex"> 
    //         <img src="${urlCarrinho}${modeloFiltradoPorModelo[0].imagens[0].path}"></img>
    //         <div class="carrinho-externo__info">
    //           <span class="carrinho-externo__prodDesc">${produtoCarrinho.descricao}</span>
    //           <span class="carrinho-externo__prodCor">Cor: ${modeloFiltradoPorModelo[0].cor.nome}</span>
    //           <span class="carrinho-externo__prodTam">Tam.: ${produto.idTamanho}</span>  
    //         </div>
    //       </div>
    //       <div class="carrinho-externo__prodInput flex">                        
    //         <div class="input-group-ext">
    //           <input type="button" value="-" class="button-minus" data-field="quantity">
    //           <input type="number" step="1" max="" value="1" name="quantity" class="quantity-field-ext">
    //           <input type="button" value="+" class="button-plus" data-field="quantity">
    //         </div>  
    //         <span class="carrinho-externo__prodPreco">${produtoCarrinho.preco}</span>
    //       </div>
    //     </div> 
    //     `
    //     return html
    //   }
      
     
    //   inserirProdutosNoCarrinho()
      
    // }, '')
    }

  }else{
    listaProdutos.innerHTML = `<h2>Não há produtos em seu carrinho!</h2>`
  }
}

