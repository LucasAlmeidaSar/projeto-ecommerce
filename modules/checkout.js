/*
** TODO - Refatorar todo o código.
*/

// Botões formulário
const btnAvancar = document.querySelectorAll('.btn-avancar')
const btnVoltar = document.querySelectorAll('.btn-voltar')
const btnComprar = document.querySelector('.btn-finalizar-compra')
const passo = document.querySelectorAll('.passos')
const formulario = document.querySelector('.form-geral')

// Botões Pagamento
const pagamentoCartao = document.querySelector('.pagamento__cartao')
const pagamentoCartaoCelular = document.querySelector('.pagamento__cartao-celular')
const pagamentoBoleto = document.querySelector('.pagamento__boleto')
const btnCartao = document.querySelector('.btn__cartao')
const btnBoleto = document.querySelector('.btn__boleto')



btnAvancar[0].addEventListener('click', () => {
    passo[0].classList.add('finalizado')   
    passo[0].classList.remove('atual')   
    passo[1].classList.add('atual')  
    formulario.style.marginLeft = "-100%"
    window.scrollTo(top)
})

btnAvancar[1].addEventListener('click', () => {
    passo[1].classList.add('finalizado')   
    passo[1].classList.remove('atual')  
    passo[2].classList.add('atual')  
    formulario.style.marginLeft = "-200%"
    window.scrollTo(top)
})

btnAvancar[2].addEventListener('click', () => {
    passo[2].classList.add('finalizado')   
    passo[2].classList.remove('atual')  
    passo[3].classList.add('atual')   
    formulario.style.marginLeft = "-300%"
    window.scrollTo(top)
})  


btnVoltar[0].addEventListener('click', () => {
    passo[0].classList.remove('finalizado')   
    passo[0].classList.add('atual')   
    passo[1].classList.remove('atual')   
    formulario.style.marginLeft = "0%"
    window.scrollTo(top)
})

btnVoltar[1].addEventListener('click', () => {
    passo[1].classList.remove('finalizado')   
    passo[1].classList.add('atual')   
    passo[2].classList.remove('atual')    
    formulario.style.marginLeft = "-100%"
    window.scrollTo(top)
})

btnVoltar[2].addEventListener('click', () => {
    passo[2].classList.remove('finalizado')  
    passo[2].classList.add('atual')   
    passo[3].classList.remove('atual')    
    formulario.style.marginLeft = "-200%"

    pagamentoCartao.classList.remove('ativo')
    pagamentoCartaoCelular.classList.remove('ativo')
    btnCartao.classList.remove('ativo')
    pagamentoBoleto.classList.remove('ativo')
    btnBoleto.classList.remove('ativo')
    pagamentoCartao.style.height = '0px'
    pagamentoBoleto.style.height = '0px'
    window.scrollTo(top)
})

btnComprar.addEventListener('click', () => {
    passo[3].classList.add('finalizado')   
    passo[3].classList.remove('atual')
    formulario.style.marginLeft = "-400%"

    pagamentoCartao.classList.remove('ativo')
    pagamentoCartaoCelular.classList.remove('ativo')
    btnCartao.classList.remove('ativo')
    pagamentoBoleto.classList.remove('ativo')
    btnBoleto.classList.remove('ativo')
    pagamentoCartao.style.height = '0px'
    pagamentoBoleto.style.height = '0px'
    window.scrollTo(top)
})




btnCartao.addEventListener('click' , () => {
  const larguraTela = window.innerWidth

  larguraTela < 1024 ? pagamentoCartaoCelular.classList.toggle('ativo') : pagamentoCartao.classList.toggle('ativo')
    
  btnCartao.classList.toggle('ativo')
  var altura = pagamentoCartao.style.height
  altura === '480px' ? altura = '0px' : altura = '480px'
  pagamentoCartao.style.height = altura 
})

btnBoleto.addEventListener('click' , () => {
    pagamentoBoleto.classList.toggle('ativo')
    btnBoleto.classList.toggle('ativo')

    var altura = pagamentoBoleto.style.height
    altura === '110px' ? altura = '0px' : altura = '110px'
    pagamentoBoleto.style.height = altura 
})


// CUPOM
const aplicarCupomLG = document.querySelector('[data-js="aplicar-cupom-lg"]')
const perguntaCupomLG = document.querySelector('[data-js="pergunta-cupom-lg"]')
const cupomInputLG = document.querySelector('[data-js="cupom-input-lg"]')
const aplicarCupomSM = document.querySelector('[data-js="aplicar-cupom-sm"]')
const perguntaCupomSM = document.querySelector('[data-js="pergunta-cupom-sm"]')
const cupomInputSM = document.querySelector('[data-js="cupom-input-sm"]')

perguntaCupomLG.addEventListener('click' , () => {
  perguntaCupomLG.classList.add('inativo')
    aplicarCupomLG.classList.remove('inativo')
    cupomInputLG.classList.remove('inativo')
})

perguntaCupomSM.addEventListener('click' , () => {
  perguntaCupomSM.classList.add('inativo')
    aplicarCupomSM.classList.remove('inativo')
    cupomInputSM.classList.remove('inativo')
})



// DETALHES DO PEDIDO
const detalhesBtn = document.querySelector('.resumo-pedido-btn')
const iconeResumoPedido = document.querySelector('.icone-resumo-pedido')
const titulosResumoPedido = document.querySelectorAll('.titulos-resumo')
const conteudoResumoPedido = document.querySelector('.conteudo-resumo-pedido')

detalhesBtn.addEventListener('click', () => {
  iconeResumoPedido.classList.toggle('fa-arrow-circle-up')
  titulosResumoPedido.forEach(titulo => titulo.classList.toggle('inativo'))
  conteudoResumoPedido.classList.toggle('inativo')
})