import service from '../modules/service-api.js'

async function iniciar() {
    if (await service.getUsuario() !== false) {
        location.replace('/');
        return;
    }

    document.querySelector('.hide').classList.remove('hide');
}

iniciar();