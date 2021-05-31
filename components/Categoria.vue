<template>
    <div v-if="open" class="modal-tamanho">
        <div class="modal-tamanho__container">
            <div class="modal-tamanho__header">
                <h2 class="modal-tamanho__titulo">Categoria</h2>
                <div class="modal-tamanho__fechar" @click="fechar(false)">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="modal-tamanho__form">
                <input-layout v-model="categoria.nome">Nome da Categoria</input-layout>
            </div>
            <div class="modal-tamanho__footer">
                <button :disabled="!preenchido" @click="salvar" class="btn">
                    Confirmar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            categoria: {
                id: null,
                nome: null,
            },
            open: false,
        };
    },

    methods: {
        fechar(resultado) {
            this.categoria = {
                id: null,
                nome: null,
            }
            this.open = false;

            this.$emit('fechar', resultado);
        },

        abrir(categoria) {
            this.open = true;
            if(categoria) {
                this.categoria = categoria;
            }
        },

        async salvar() {
            let obj = JSON.stringify(this.categoria);
            let resposta;
            let headers = {
                'Content-Type': 'application/json'
            }

            if (this.categoria.id === null) {
                resposta = await fetch(this.$URLAPI_BASE + '/api/categorias', {
                    body: obj,
                    method: 'post',
                    headers
                });
            }
            else {
                resposta = await fetch(this.$URLAPI_BASE + '/api/categorias/' + this.categoria.id, {
                    body: obj,
                    method: 'put',
                    headers
                });
            }

            if(resposta.ok) {
                this.fechar(true);
                return;
            }
            
            alert('Não foi possível salvar');
        },
    },

    computed: {
        preenchido() {
            return this.categoria.nome !== null && this.categoria.nome !== '';
        },
    },

    components: {
        "input-layout": httpVueLoader("../components/InputLayout.vue"),
    },
};
</script>

<style scoped>
.modal-tamanho {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.253);
}

.modal-tamanho__container {
    position: fixed;
    z-index: 1001;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 360px;
    border-radius: 8px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.253);
    padding: 24px;
}

.modal-tamanho__header {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-tamanho__titulo {
    font-size: 1.2em;
}

.modal-tamanho__fechar {
    width: fit-content;
    padding: 4px 7px;
    border-radius: 50%;
    display: flex;
    justify-items: center;
    align-items: center;
    font-size: 1.2em;
    transition: background 500ms ease;
    cursor: pointer;
}

.modal-tamanho__fechar:hover {
    background-color: rgba(0, 0, 0, 0.13);
}

.modal-tamanho__form > * {
    margin-bottom: 24px;
}

.modal-tamanho__footer {
    padding-top: 24px;
    margin-top: 12px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>