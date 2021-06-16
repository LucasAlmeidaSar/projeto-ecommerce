const urlCarrinho = "http://localhost:8080"
const divProdutos = document.querySelector('[data-js="listaProdutos"]')
var produtosCarrinho = []
const valorTotal = document.querySelector('[data-js="valorTotal"]')
const valorSubtotal = document.querySelector('[data-js="valorSubtotal"]')
const qtdProdutos = document.querySelector('[data-js="qtdProdutos"]')

onload = () => {
  if (localStorage.hasOwnProperty("produtos")) {
    produtosCarrinho = JSON.parse(localStorage.getItem("produtos"))
    var html = ''
    divProdutos.innerHTML = html
    console.log(produtosCarrinho);
    var valorFinal = 0
    
    produtosCarrinho.forEach(produto => {
      const getProdutosCarrinho = async () => await (await fetch(`${urlCarrinho}/api/roupas/${produto.id}`)).json()
      
    
      const inserirProdutosNoCarrinho = async () => {
        const produtoCarrinho = await getProdutosCarrinho()
        console.log(produtoCarrinho);             
        
        const modeloFiltradoPorModelo = produtoCarrinho.modelos.filter(modelo => modelo.id == produto.idCor)   
        console.log('produto:',produto);
        console.log('produtoCarrinho:', produtoCarrinho);
        console.log('modeloFiltradoPorModelo:', modeloFiltradoPorModelo);
        html += `
          <div class="carrinho-externo__container flex" data-valor="${produtoCarrinho.preco*produto.qtd}">
          <div class="carrinho-externo__img flex"> 
            <img class="imagem" src="${urlCarrinho}${modeloFiltradoPorModelo[0].imagens[0].path}"></img>
            <div class="carrinho-externo__info">
              <span class="carrinho-externo__prodDesc">${produtoCarrinho.descricao}</span>
              <span class="carrinho-externo__prodCor">Cor: ${modeloFiltradoPorModelo[0].cor.nome}</span>
              <span class="carrinho-externo__prodTam">Tam.: ${produto.idTamanho}</span>  
            </div>
          </div>
          <div class="carrinho-externo__prodInput flex">                        
            <div class="input-group-ext">
              <input type="button" value="-" class="button-minus" data-field="quantity">
              <input type="number" step="1" max="" value="${produto.qtd}" name="quantity" class="quantity-field-ext">
              <input type="button" value="+" class="button-plus" data-field="quantity">
            </div>  
            <span class="carrinho-externo__prodPreco">${(produtoCarrinho.preco*produto.qtd).toFixed(2)}</span>
          </div>
        </div> 
        `        
        divProdutos.innerHTML = html
        valorFinal += produtoCarrinho.preco*produto.qtd
        valorTotal.innerHTML = valorFinal.toFixed(2)
        valorSubtotal.innerHTML = valorFinal.toFixed(2)
        qtdProdutos.innerHTML = produtosCarrinho.length
      }          
       
      inserirProdutosNoCarrinho()
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
}

divProdutos.addEventListener('click', event => {
  const btnClicado = event.target


  if (btnClicado.className == 'button-minus') {    
    console.log('clicou no menos');
    let input = btnClicado.nextElementSibling
    
    const div = btnClicado.parentElement.parentElement
    const preco = parseFloat(div.children[1].innerHTML)

    let valorInput = parseInt(input.value)
    if (valorInput === 1) {
      console.log('produto zerado');
      const divProduto = btnClicado.parentElement.parentElement.parentElement
      qtdProdutos.innerHTML -= 1
      divProduto.remove()
    }

    input.value = valorInput - 1
    div.children[1].innerHTML = (preco - (preco/valorInput)).toFixed(2)

    valorTotal.innerHTML = (parseFloat(valorTotal.innerHTML) - (preco/valorInput)).toFixed(2)
    valorSubtotal.innerHTML = (parseFloat(valorSubtotal.innerHTML) - (preco/valorInput)).toFixed(2)

    
    
  }
 

  if (btnClicado.className == 'button-plus') {
        console.log('clicou no mais');
        let input = btnClicado.previousElementSibling
        const div = btnClicado.parentElement.parentElement
        const preco = parseFloat(div.children[1].innerHTML)

        let valorInput = parseInt(input.value)
        input.value = valorInput + 1
        div.children[1].innerHTML = (preco + (preco/valorInput)).toFixed(2)

        valorTotal.innerHTML = (parseFloat(valorTotal.innerHTML) + (preco/valorInput)).toFixed(2)
        valorSubtotal.innerHTML = (parseFloat(valorSubtotal.innerHTML) + (preco/valorInput)).toFixed(2)
  }

})




