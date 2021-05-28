<template>
    <div v-if="open" class="modal-tamanho">
        <div class="modal-tamanho__container">
            <div class="modal-tamanho__header">
                <h2 class="modal-tamanho__titulo">Adicionar Tamanho</h2>
                <div class="modal-tamanho__fechar" @click="fechar">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="modal-tamanho__form">
                <select-layout
                    title="Tamanho"
                    :options="tamanhos"
                    placeholder="Tamanho"
                    v-model="conteudo.tamanho"
                ></select-layout>
                <input-layout v-model="conteudo.quantidade" type="number" min="1"
                    >Quantidade</input-layout
                >
            </div>
            <div class="modal-tamanho__footer">
                <button :disabled="!preenchido" @click="enviar" class="btn">
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
            conteudo: {
                tamanho: null,
                quantidade: 1,
            },
            tamanhos: [],
            open: false,
            modelo: null,
        };
    },

    methods: {
        fechar() {
            this.conteudo.tamanho = null;
            this.conteudo.quantidade = 1;
            this.modelo = null;
            this.open = false;
        },

        abrir(tipoTamanho, modelo) {
            this.open = true;
            this.modelo = modelo;

            this.listarTamanhos(tipoTamanho);
        },

        listarTamanhos(tipoTamanho) {
            let _this = this;

            fetch(this.$URLAPI_BASE + "/api/tamanhos/" + tipoTamanho)
                .then((res) => res.json())
                .then((res) => {
                    _this.tamanhos = res;
                });
        },

        enviar() {
            this.$emit("enviar", {
                conteudo: {...this.conteudo},
                modelo: this.modelo,
            });
        },
    },

    computed: {
        preenchido() {
            return (
                this.conteudo.tamanho != null
            );
        },

        quantidade() {
            return this.conteudo.quantidade;
        }
    },

    watch: {
        quantidade(newVal) {
            if(newVal < 0) {
                this.conteudo.quantidade = 0;
            }
        }
    },

    components: {
        "input-layout": httpVueLoader("../components/InputLayout.vue"),
        "select-layout": httpVueLoader("../components/SelectLayout.vue"),
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