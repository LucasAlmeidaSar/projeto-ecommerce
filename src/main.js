import ativarEfeitosDeScroll from '../modules/scroll.js'
import ativarEfeitosDoMenuCelular from '../modules/menu.js'
import ativarCarrossel from '../modules/carrossel.js'
import ativarCarrinho from '../modules/cart.js'
import ativarLupa from '../modules/lupa.js'
import ativarEfeitosAoCarregar from '../modules/onload.js'

const App = {

     iniciar() {

        onload = () => {
          ativarEfeitosAoCarregar()

          ativarEfeitosDoMenuCelular();

          ativarCarrossel();

          // ativarCarrinho();

          ativarLupa();   
                      
          window.scrollTo(top)
        }
        
        onscroll = () => ativarEfeitosDeScroll();        
    }
}


export { App }