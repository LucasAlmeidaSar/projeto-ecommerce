import service from "./service-api.js";

async function redirecionarNaoAutenticado() {
    let usuario = await service.getUsuario();

    if (usuario === false) {
        let locAtual = location.href;
        let expiration = new Date();

        expiration.setMinutes(expiration.getMinutes() + 2);

        let next = {
            location: locAtual,
            expiration
        }

        localStorage.setItem('next', JSON.stringify(next));
        
        location.replace('/pages/login.html');
        return;
    }

    document.querySelector('.hide').classList.remove('hide');
}

redirecionarNaoAutenticado();