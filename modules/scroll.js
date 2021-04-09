import classesDosElementos from './util.js'


export default function ativarEfeitosDeScroll() {
    const scrollDocumento = document.documentElement.scrollTop

    efeitosMenuTopo(scrollDocumento)
    efeitosSecaoLancamentos(scrollDocumento)
    efeitosSecaoMarketing(scrollDocumento)
    efeitosSecaoProdutosOferta(scrollDocumento)
    efeitosSecaoCategorias(scrollDocumento)
    efeitosSecaoMapa(scrollDocumento)

}



function efeitosMenuTopo (scrollDocumento) {
    const itensMenuTopo = document.querySelectorAll('.js-itensMenuTopo')    
    scrollDocumento >= 500 ? classesDosElementos.adicionar('on-scroll', itensMenuTopo) : classesDosElementos.remover('on-scroll', itensMenuTopo)
}


function efeitosSecaoLancamentos (scrollDocumento) {
    const titulo = document.querySelector('.lancamentos .conteudo-principal__title')
    const carrosssel = document.querySelector('.carrossel')
    if (scrollDocumento >= ( titulo.offsetTop - 500 )) classesDosElementos.adicionar('on-scroll' , titulo)
    if (scrollDocumento >= ( carrosssel.offsetTop - 400 )) classesDosElementos.adicionar('on-scroll' , carrosssel)
}


function efeitosSecaoMarketing (scrollDocumento) {
    const bannerProdutos = document.querySelector('.mkt-produtos')
    const bannerIlustrativo = document.querySelector('.mkt-ilustrativo')
    if (scrollDocumento >= ( bannerProdutos.offsetTop - 450 )) classesDosElementos.adicionar('on-scroll', bannerProdutos)
    if (scrollDocumento >= ( bannerIlustrativo.offsetTop - 450 )) classesDosElementos.adicionar('on-scroll', bannerIlustrativo)
}


function efeitosSecaoProdutosOferta (scrollDocumento) {
    const gridProdutos = document.querySelector('.produtos-oferta__grid')
    if (scrollDocumento >= ( gridProdutos.offsetTop - 450 )) classesDosElementos.adicionar('on-scroll' , gridProdutos)
}


function efeitosSecaoCategorias (scrollDocumento) {
    const gridCategorias = document.querySelector('.categorias__flex')
    if (scrollDocumento >= ( gridCategorias.offsetTop - 450 )) classesDosElementos.adicionar('on-scroll' , gridCategorias)
}


function efeitosSecaoMapa (scrollDocumento) {
    const mapa = document.querySelector('.mapa')
    const infoMapa = document.querySelector('.informacao-contato')
    if (scrollDocumento >= ( mapa.offsetTop - 350 )) classesDosElementos.adicionar('on-scroll' , infoMapa)
}