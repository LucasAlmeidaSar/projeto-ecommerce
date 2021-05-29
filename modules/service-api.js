export const URLAPI_BASE = 'http://coldythegreat.ddns.net:8080';

const PATH_ROUPA = '/api/roupas/';
const PATH_IMAGEM = PATH_ROUPA + 'enviarImagens/';

function ServiceException(mensagem) {
    this.message = mensagem;

    this.toString = function() {
        return this.message;
    }
}

const service = {

    async enviarProduto(roupa) {
        console.log('Enviando roupa');

        let objJson = JSON.stringify(roupa);

        let resposta = await fetch(URLAPI_BASE + PATH_ROUPA, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: objJson,
        });

        if (resposta.status === 201) {
            let objResposta = await resposta.json();
            console.log('Enviado com sucesso! Resposta: ', objResposta);

            return objResposta;
        }
        return false;
    },

    async atualizarProduto(roupa) {
        if (!roupa.id) {
            throw new ServiceException("Não foi possível atualizar: produto recebido não tem id");
        }

        let resposta = await fetch(URLAPI_BASE + PATH_ROUPA + roupa.id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(roupa)
        });

        if(resposta.status === 200) {
            let obj = await resposta.json();
            console.log('Roupa atualizada com sucesso')
            return obj;
        }
        return false;
    },

    async enviarImagens(imagens, modeloId) {
        let form = new FormData();

        for (let file of imagens) {
            form.append('files', file);
        }

        let resposta = await fetch(URLAPI_BASE + PATH_IMAGEM + modeloId, {
            method: 'post',
            body: form,
        });

        if (resposta.status === 200) {
            console.log('Imagens do modelo '+ modeloId +' enviadas com sucesso!');
            return true;
        }
        return false;
    },

    async removerProduto(id) {
        let resposta = await fetch(URLAPI_BASE + PATH_ROUPA + id, {method: 'delete'});

        return resposta.ok;
    }
}

export default service;

