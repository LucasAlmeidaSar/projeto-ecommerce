export const URLAPI_BASE = 'http://localhost:8080';

const PATH_ROUPA = '/api/roupas/';
const PATH_IMAGEM = PATH_ROUPA + 'enviarImagens/';

function ServiceException(mensagem) {
    this.message = mensagem;

    this.toString = function() {
        return this.message;
    }
}

function getToken() {
    return localStorage.getItem('token');
}

const service = {

    async enviarProduto(roupa) {
        console.log('Enviando roupa');

        let objJson = JSON.stringify(roupa);

        let resposta = await fetch(URLAPI_BASE + PATH_ROUPA, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + getToken(),
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
                'Authorization': 'Bearer ' + getToken(),
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
            headers: {
                'Authorization': 'Bearer ' + getToken(),
            }
        });

        if (resposta.status === 200) {
            console.log('Imagens do modelo '+ modeloId +' enviadas com sucesso!');
            return true;
        }
        return false;
    },

    async removerProduto(id) {
        let resposta = await fetch(URLAPI_BASE + PATH_ROUPA + id, {
            method: 'delete',
            headers: {
                'Authorization': 'Bearer ' + getToken(),
            }
        });

        return resposta.ok;
    },

    async alternarAtivo(id) {
        let resposta = await fetch(URLAPI_BASE + '/api/roupas/alternarAtivo/' + id, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + getToken(),
            }
        });

        if(resposta.ok) {
            resposta = await resposta.json();
            return resposta;
        }

        throw new ServiceException("Não foi possível atualizar produto: " + resposta.status);
    },

    async realizarLogin(usuario, senha) {
        localStorage.removeItem('token');
        let resposta;

        resposta = await fetch(URLAPI_BASE + '/api/auth/signin', {
            method: 'post',
            body: JSON.stringify({email: usuario, senha: senha}),
            headers: {
                "Content-Type": "application/json",
                Accept: "text/plain"
            }
        });

        if(resposta.ok) {
            let token = await resposta.text();

            localStorage.setItem('token', token);
            return true;
        }
        
        if (resposta.status === 401) {
            return false;
        }
        
    },

    async enviarCor(cor) {
        let resposta = await fetch(URLAPI_BASE + "/api/cores", {
            method: "post",
            body: JSON.stringify(cor),
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        if (resposta.status === 201) {
            let objResposta = await resposta.json();
            console.log('Enviado com sucesso! Resposta: ', objResposta);

            return objResposta;
        }

        return false;
    },

    async atualizarCor(cor) {
        if (!cor.id) {
            throw new ServiceException("Não foi possível atualizar: a cor recebida não tem id");
        }

        let resposta = await fetch(URLAPI_BASE + "/api/cores/" + cor.id, {
            method: "put",
            body: JSON.stringify(cor),
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        if(resposta.status === 200) {
            let obj = await resposta.json();
            console.log('Cor atualizada com sucesso')
            return obj;
        }
        return false;
    },

    async enviarCategoria(categoria) {
        let resposta = await fetch(URLAPI_BASE + "/api/categorias", {
            method: "post",
            body: JSON.stringify(categoria),
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        if (resposta.status === 201) {
            let objResposta = await resposta.json();
            console.log('Enviado com sucesso! Resposta: ', objResposta);

            return objResposta;
        }

        return false;
    },

    async atualizarCategoria(categoria) {
        if (!categoria.id) {
            throw new ServiceException("Não foi possível atualizar: a categoria recebida não tem id");
        }

        let resposta = await fetch(URLAPI_BASE + "/api/categorias/" + categoria.id, {
            method: "put",
            body: JSON.stringify(categoria),
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        if(resposta.status === 200) {
            let obj = await resposta.json();
            console.log('Categoria atualizada com sucesso')
            return obj;
        }
        return false;
    },

    async getUsuario() {
        let resposta = await fetch(URLAPI_BASE + '/api/usuarios/me', {
            headers: {
                Authorization: 'Bearer ' + getToken(),
            }
        });

        if (resposta.status === 401) {
            return false;
        }

        resposta = await resposta.json();

        return resposta;
    }
}

export default service;

