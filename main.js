import ativarEfeitosDeScroll from './modules/scroll.js'
import ativarMenuColapsado from './modules/menu.js'
import ativarCarrossel from './modules/carrossel.js'


//Ao scrollar a página
window.onscroll = () => ativarEfeitosDeScroll()

//Menu p/ Celular
ativarMenuColapsado()

// Carrossel de imagens
ativarCarrossel()