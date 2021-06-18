const vitrinelist = document.querySelector('[data-js="vitrinelist"]')
const vitrine = document.querySelector('[data-js="vitrine"]')
const container = document.querySelector('.container')
const catalogoLista = document.querySelector('[data-js="catalogoLista"]')
const nomeProduto = document.querySelector('[data-js="nomeProduto"]')
const precoProduto = document.querySelector('[data-js="precoProduto"]')
const listaCores = document.querySelector('[data-js="listaCores"]')
const listaTamanhos = document.querySelector('[data-js="listaTamanhos"]')
const adicionarProduto = document.querySelector('[data-js="adicionarProduto"]')
const btnComprar = document.querySelector('[data-js="comprar"]')
const qtdDisponivel = document.querySelector('[data-js="qtdDisponivel"]')
const quantidadeInput = document.querySelector('#quantidade')
const addQtd = document.querySelector('[data-js="addQtd"]')
const modalAddProduto = document.querySelector('[data-js="modalAddProduto"]')
const btnFecharModal = document.querySelector('[data-js="btnFecharModal"]')
var produtosLocalStorage = []

const api = "http://coldythegreat.ddns.net:8080"

// Carregar com filtro de genero aplicado - Filtro Genero
function resgatarProduto() {
  const usp = new URLSearchParams(location.search)
  const produto = usp.get('idProduto')
  return produto
}

const idProduto = resgatarProduto()
onload = () => {
  if (idProduto === 'null' || !idProduto) {
    container.innerHTML = 
      '<h1 style="height: 100vh; text-align: center; line-height: 50vh">Não há produtos a serem exibidos.</h1>'
    console.log('Não há produto a ser exibido');    
  }else{   
    
    const getProdutoUnico = async () => await (await fetch(`${api}/api/roupas/${idProduto}`)).json()

    const inserirProdutoUnico = async () => {
      const produto = await getProdutoUnico()
      console.log(produto);
      vitrine.setAttribute('src', `${api}${produto.modelos[0].imagens[0].path}`)

      let imagens = []
      let cores = []
      let tamanhos = []

     

      const modelos = produto.modelos.forEach( modelo => {        
        const novasImagens = modelo.imagens.reduce((lista, {path}) => {
          lista += `
            <li> 
              <button class="botao" >
                <div class="zoom">
                  <img class="foto imagem" src="${api}${path}">
                </div>
              </button>                        
            </li>
          `
          return lista
        },'')
        
        imagens += novasImagens


        const novosTamanhos = modelo.tamanhosModelo.map(({tamanho}) => tamanhos.push(tamanho) )

        tamanhos = tamanhos.filter((tamanho, index, tamanhos) => index === tamanhos.indexOf(tamanho))

      
        console.log(tamanhos);

        


        const novasCores = 
           `
          <li class="cor" >
              <a class="botao__cor" 
                 style="background: ${modelo.cor.valor}" 
                 data-modelo="${modelo.id}"
                 href="javascript:void(0)"
                 title="${modelo.cor.nome}"></a>
          </li>
          `       

        cores += novasCores
        // cores = cores.filter((cor, index, cores) => index === cores.indexOf(cor))

      }, '')    

            
      let listaTamanho = tamanhos.reduce((lista, tamanho) => {
        lista +=  `
          <li> 
            <button class="botao__tamanho btn-desabilitado" disabled>             
              ${tamanho}                
            </button> 
          </li>
        `
          return lista
      } ,'')

      catalogoLista.innerHTML = imagens
      listaCores.innerHTML = cores
      listaTamanhos.innerHTML = listaTamanho
      nomeProduto.innerHTML = `${produto.descricao}<button class="btn-favorito" onclick="alterarIcon()"> <i id="favorito" class="far fa-bookmark" title="Salvar"></i>`
      precoProduto.innerHTML = `R$ ${produto.preco}`
  

      
      // Inputs de cor
      listaCores.addEventListener('click', event => {
        const btnClicado = event.target
        if (btnClicado.tagName === 'A') {
          filtrarTamanhos(btnClicado.getAttribute('data-modelo')) 
          exibirQuantidadeDisponivelPorCor(btnClicado.getAttribute('data-modelo'))         
          listaCores.querySelectorAll('a').forEach(btn => btn.classList.remove('borda'))
          btnClicado.classList.add('borda')
        }
      })

      // Inputs de tamanho
      listaTamanhos.addEventListener('click', event => {
        const btnClicado = event.target
        if (btnClicado.tagName === 'A') {    
          exibirQuantidadeTotalDisponivel(btnClicado.innerHTML)        
          listaTamanhos.querySelectorAll('a').forEach(btn => btn.classList.remove('borda'))
          btnClicado.classList.add('borda')
        }
      })


      function filtrarTamanhos(id){
        const modelo = produto.modelos.filter(modelo => modelo.id == id)

        if (modelo[0].quantidadeTotal > 0) {

          const tamanhos = modelo[0].tamanhosModelo 

          var listaTamanho = tamanhos.reduce((lista, {tamanho, quantidade}) => {
            if (quantidade > 0) {
              lista +=  `
                <li> 
                  <a class="botao__tamanho" href="javascript:void(0)">${tamanho}</a> 
                </li> `            
            }
            
            return lista
          } ,'')

          listaTamanhos.innerHTML = listaTamanho
          vitrine.setAttribute('src', `${api}${modelo[0].imagens[0].path}`)

        }else{
          var listaTamanho = `
            <p style="background: lightgray; margin:10px; padding:10px; border-radius:10px;">Nenhum modelo cadastrado.</p>
          `
          listaTamanhos.innerHTML = listaTamanho
        }  

        // const tamanhos = modelo[0].tamanhosModelo 

        // var listaTamanho = tamanhos.reduce((lista, {tamanho, quantidade}) => {
        //   if (quantidade > 0) {
        //     lista +=  `
        //       <li> 
        //         <a class="botao__tamanho" href="javascript:void(0)">${tamanho}</a> 
        //       </li> `            
        //   }
          
        //   return lista
        // } ,'')

        // listaTamanhos.innerHTML = listaTamanho

      }

      function exibirQuantidadeDisponivelPorCor(id){
        const modelo = produto.modelos.filter(modelo => modelo.id == id)
        const qtdTotal = modelo[0].quantidadeTotal
        qtdDisponivel.innerHTML = qtdTotal
        quantidadeInput.max = qtdTotal
      }

      function exibirQuantidadeTotalDisponivel(tamanho){
        const corSelecionada = listaCores.querySelector('.borda')
        const idCor = corSelecionada.dataset.modelo
        
        const modelo = produto.modelos.filter(modelo => modelo.id == idCor)
        const modeloFinal = modelo[0].tamanhosModelo.filter(modeloFinal => modeloFinal.tamanho == tamanho)
        
        qtdDisponivel.innerHTML = modeloFinal[0].quantidade
        quantidadeInput.max = modeloFinal[0].quantidade
      }


      catalogoLista.addEventListener('click', event => {
        const btnClicado = event.target
        if (btnClicado.tagName === 'IMG') {
          alterarImagemVitrine(btnClicado.getAttribute('src'))
        }
      })

      function alterarImagemVitrine(path) {
       vitrine.setAttribute('src', path)
      }

      adicionarProduto.addEventListener('click', () => {
        
        if ( (quantidadeInput.value > 0) && (quantidadeInput.value <= parseInt(qtdDisponivel.innerText)) ) {
          const idProduto = produto.id
          const idCor = listaCores.querySelector('.borda').dataset.modelo
          const nomeTamanho = listaTamanhos.querySelector('.borda').innerHTML
          const qtd = parseInt(quantidadeInput.value)
          const preco = produto.preco

          if (localStorage.hasOwnProperty("produtos")) {
            produtosLocalStorage = JSON.parse(localStorage.getItem("produtos"))  
            console.log('Já tem base.',produtosLocalStorage);
          }                  

          if (produtosLocalStorage.length == 0) {
            guardarNoCarrinho(idProduto, idCor, nomeTamanho, qtd, preco)
            console.log('Tem base mas estava zerada.',produtosLocalStorage);
            alternarModalAddProduto()
          }
          else{
            const produtoAtual = produtosLocalStorage.filter(produtoLS => produtoLS.idCor == idCor)
            console.log('Produto atual: ',produtoAtual);

            if (produtoAtual.length == 0) {
              guardarNoCarrinho(idProduto, idCor, nomeTamanho, qtd, preco)
              alternarModalAddProduto()
            }else{                
              let novaQtd = parseInt(produtoAtual[0].qtd) + parseInt(qtd)
              console.log('Já tem produto:' ,produtoAtual);
              produtosLocalStorage.splice(produtosLocalStorage.indexOf(produtoAtual[0]), 1)                       
              localStorage.setItem('produtos', JSON.stringify(produtosLocalStorage))
              guardarNoCarrinho(idProduto, idCor, nomeTamanho, novaQtd , preco)
              alternarModalAddProduto()         
            }
          }
          
          

          // guardarNoCarrinho(idProduto, idCor, nomeTamanho, qtd, preco)
          // alternarModalAddProduto()
        } else {
          console.log('Qtd disponível menor doque solicitado.', quantidadeInput.value, qtdDisponivel.innerText);
        }
      })

      btnComprar.addEventListener('click', () => {
        
        if ( (quantidadeInput.value > 0) && (quantidadeInput.value <= parseInt(qtdDisponivel.innerText)) ) {
          let produtosLocalStorage = JSON.parse(localStorage.getItem("produtos"))  
          
          

          const idProduto = produto.id
          const idCor = listaCores.querySelector('.borda').dataset.modelo
          const nomeTamanho = listaTamanhos.querySelector('.borda').innerHTML
          const qtd = quantidadeInput.value
          const preco = produto.preco

          const produtoAtual = produtosLocalStorage.filter(produtoLS => produtoLS.idCor == idCor)

          if (produtosLocalStorage.length == 0) {
            guardarNoCarrinho(idProduto, idCor, nomeTamanho, qtd, preco)
          }
          
          if (produtoAtual.length == 0) {
            guardarNoCarrinho(idProduto, idCor, nomeTamanho, qtd, preco)
          }else{
            console.log('já tem');            
          }

         
        } else {
          console.log('Qtd disponível menor doque solicitado.', quantidadeInput.value, qtdDisponivel.innerText);
        }
      })

      addQtd.addEventListener('click', () => {
        precoProduto.innerHTML = `R$ ${(produto.preco * quantidadeInput.value).toFixed(2)}`
        liberarBotoes()
      })
      
    }
    inserirProdutoUnico()       
  }  
}






// Adicionar ao Carrinho
let produtosCarrinho = []

function guardarNoCarrinho(idProduto, idCor, idTamanho, qtd, preco){ 

  if (localStorage.hasOwnProperty("produtos")) {
    produtosCarrinho = JSON.parse(localStorage.getItem("produtos"))
  }

  produtosCarrinho.push(
    {
      id: idProduto,
      idCor: idCor,
      idTamanho: idTamanho,
      qtd: qtd,
      preco: preco
    }
    )

  localStorage.setItem("produtos", JSON.stringify(produtosCarrinho))

}

function liberarBotoes(){
  
  if (listaCores.querySelector('.borda') && listaTamanhos.querySelector('.borda') && quantidadeInput.value != 0 && quantidadeInput.value <= parseInt(qtdDisponivel.innerHTML)) {
    adicionarProduto.disabled = false
    btnComprar.disabled = false
  }else{
    adicionarProduto.disabled = true
    btnComprar.disabled = true
  }
  
}

function alternarModalAddProduto() {
  modalAddProduto.classList.add('ativo')
}

btnFecharModal.addEventListener('click', () => {
  modalAddProduto.classList.remove('ativo')
})


