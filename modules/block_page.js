import service from "./service-api.js";

function redirecionarNaoAutenticado() {
    let usuario = service.getUsuario();

    if (usuario === false) {
        let locAtual = location.href;

        localStorage.setItem('next', locAtual)
        
        location.replace('/pages/login.html');
    }
}