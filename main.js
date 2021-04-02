import ativarEfeitosDeScroll from './modules/scroll.js'
import ativarMenuColapsado from './modules/menu.js'


//Ao scrollar a página
window.onscroll = () => ativarEfeitosDeScroll()


//Menu p/ Celular
ativarMenuColapsado()