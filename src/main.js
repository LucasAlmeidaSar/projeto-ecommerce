import ativarEfeitosDeScroll from '../modules/scroll.js'
import ativarEfeitosDoMenuCelular from '../modules/menu.js'
import ativarCarrossel from '../modules/carrossel.js'
import ativarCarrinho from '../modules/cart.js'

const App = {

     iniciar() {

        // Ao scrollar a página
        window.onscroll = () => ativarEfeitosDeScroll();
    
        // Menu p/ Celular
        ativarEfeitosDoMenuCelular();
    
        // Carrossel de imagens
        ativarCarrossel();
    
        // Carrinho da Home
        ativarCarrinho();
    
    }
}


export { App }