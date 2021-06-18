import service from "./service-api.js"


const urlCheckout = "http://coldythegreat.ddns.net:8080"
const listaProdutos = document.querySelectorAll('[data-js="listaProdutos"]')
var produtosLocalStorage = []
const valorTotal = document.querySelectorAll('[data-js="valorTotal"]')
const valorSubtotal = document.querySelectorAll('[data-js="subTotal"]')
const qtdProdutos = document.querySelector('[data-js="qtdProdutos"]')
const frete = document.querySelectorAll('[data-js="frete"]')
const parcelasCartao = document.querySelector('#parcelas')
const finalizarCompra = document.querySelector('[data-js="finalizarCompra"]')
const divPagamento = document.querySelector('[data-js="divPagamento"]')

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

      const valorTotalDosProdutos = produtosLocalStorage.reduce((acumulador, produto) => {
        let valorProduto = produto.preco * produto.qtd
        acumulador += valorProduto
        return acumulador
      }, 0)

      const valorFinalDaVenda = (valorTotalDosProdutos + parseFloat(frete[0].innerHTML)).toFixed(2)
      
      const op1 = document.createElement('option')
      op1.value = valorFinalDaVenda
      op1.innerText = `1x de ${op1.value}`

      const op2 = document.createElement('option')
      op2.value = (valorFinalDaVenda/2).toFixed(2)
      op2.innerText = `2x de ${op2.value}`

      const op3 = document.createElement('option')
      op3.value = (valorFinalDaVenda/3).toFixed(2)
      op3.innerText = `3x de ${op3.value}`

      const op4 = document.createElement('option')
      op4.value = (valorFinalDaVenda/4).toFixed(2)
      op4.innerText = `4x de ${op4.value}`

      const op5 = document.createElement('option')
      op5.value = (valorFinalDaVenda/5).toFixed(2)
      op5.innerText = `5x de ${op5.value}`

      const op6 = document.createElement('option')
      op6.value = (valorFinalDaVenda/6).toFixed(2)
      op6.innerText = `6x de ${op6.value}`
      
      parcelasCartao.appendChild(op1)
      parcelasCartao.appendChild(op2)
      parcelasCartao.appendChild(op3)
      parcelasCartao.appendChild(op4)
      parcelasCartao.appendChild(op5)
      parcelasCartao.appendChild(op6)
      
      
      

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

// Finalizar Compra
finalizarCompra.addEventListener('click', () => {
  const pagamento = Array.from(divPagamento.children).filter(div => div.classList[1] == 'ativo')
  const idPag = pagamento[0].dataset.id


  let produtosLS = JSON.parse(localStorage.getItem("produtos"))

  let itens = produtosLS.map(produto => {
    let obj = {
      "modelo" : parseInt(produto.idCor),
      "preco": produto.preco,
      "tamanho": produto.idTamanho,
      "quantidade": produto.qtd
    }
    return obj
  })  

  const pedido = {
    "pedido": {
        "status": 1,
        "pagamento": {
            "metodoPagamento": parseInt(idPag)
        }
    },
    "itens": itens
  } 

  console.log(pedido);

  service.enviarPedido(pedido)
})

