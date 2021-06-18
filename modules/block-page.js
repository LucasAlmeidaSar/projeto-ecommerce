import service from "./service-api.js";

async function redirecionarNaoAutenticado() {
    let usuario = await service.getUsuario();

    if (usuario === false) {
        let locAtual = location.href;

        localStorage.setItem('next', locAtual)
        
        location.replace('/pages/login.html');
        return;
    }

    document.querySelector('.hide').classList.remove('hide');
}

redirecionarNaoAutenticado();