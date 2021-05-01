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
const pagamentoBoleto = document.querySelector('.pagamento__boleto')
const btnCartao = document.querySelector('.btn__cartao')
const btnBoleto = document.querySelector('.btn__boleto')



btnAvancar[0].addEventListener('click', () => {
    passo[0].classList.add('finalizado')   
    passo[0].classList.remove('atual')   
    passo[1].classList.add('atual')  
    formulario.style.marginLeft = "-100%"
})

btnAvancar[1].addEventListener('click', () => {
    passo[1].classList.add('finalizado')   
    passo[1].classList.remove('atual')  
    passo[2].classList.add('atual')  
    formulario.style.marginLeft = "-200%"
})

btnAvancar[2].addEventListener('click', () => {
    passo[2].classList.add('finalizado')   
    passo[2].classList.remove('atual')  
    passo[3].classList.add('atual')   
    formulario.style.marginLeft = "-300%"
})  


btnVoltar[0].addEventListener('click', () => {
    passo[0].classList.remove('finalizado')   
    passo[0].classList.add('atual')   
    passo[1].classList.remove('atual')   
    formulario.style.marginLeft = "0%"
})

btnVoltar[1].addEventListener('click', () => {
    passo[1].classList.remove('finalizado')   
    passo[1].classList.add('atual')   
    passo[2].classList.remove('atual')    
    formulario.style.marginLeft = "-100%"
})

btnVoltar[2].addEventListener('click', () => {
    passo[2].classList.remove('finalizado')  
    passo[2].classList.add('atual')   
    passo[3].classList.remove('atual')    
    formulario.style.marginLeft = "-200%"

    pagamentoCartao.classList.remove('ativo')
    btnCartao.classList.remove('ativo')
    pagamentoBoleto.classList.remove('ativo')
    btnBoleto.classList.remove('ativo')
    pagamentoCartao.style.height = '0px'
    pagamentoBoleto.style.height = '0px'
})

btnComprar.addEventListener('click', () => {
    passo[3].classList.add('finalizado')   
    passo[3].classList.remove('atual')
    formulario.style.marginLeft = "-400%"

    pagamentoCartao.classList.remove('ativo')
    btnCartao.classList.remove('ativo')
    pagamentoBoleto.classList.remove('ativo')
    btnBoleto.classList.remove('ativo')
    pagamentoCartao.style.height = '0px'
    pagamentoBoleto.style.height = '0px'
})




btnCartao.addEventListener('click' , () => {
    pagamentoCartao.classList.toggle('ativo')
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


const aplicarCupom = document.querySelector('[data-js="aplicar-cupom"]')
const perguntaCupom = document.querySelector('.pergunta-cupom')
const cupomInput = document.querySelector('#cupom-input')

perguntaCupom.addEventListener('click' , () => {
    perguntaCupom.classList.add('inativo')
    aplicarCupom.classList.remove('inativo')
    cupomInput.classList.remove('inativo')
})