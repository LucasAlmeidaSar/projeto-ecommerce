<template>
    <div class="modal-cor">
        <div class="modal-cor__container">
            <div class="modal-cor__header">
                <h2 class="modal-cor__titulo">Nova cor</h2>
                <div class="modal-cor__fechar" @click="fechar">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="modal-cor__form">
                <input-layout v-model="cor.nome"
                    >Nome da cor (Ex.: Verde)</input-layout
                >
                <label class="label-cor">
                    <span class="label-cor__span">Cor:</span>
                    <div
                        class="label-cor__view"
                        :style="'background-color: ' + cor.valor"
                    ></div>
                    <div class="label-cor__ocultar">
                        <input
                            v-model="cor.valor"
                            class="label-cor__input"
                            type="color"
                        />
                    </div>
                    <span class="label-cor__span"></span>
                </label>
            </div>
            <div class="modal-cor__footer">
                <button :disabled="!preenchido || enviando" @click="enviarCor" class="btn">
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
            cor: {
                nome: null,
                valor: "#16162f",
            },
            enviando: false,
        };
    },

    methods: {
        fechar() {
            this.cor.nome = null;
            this.cor.valor = "#16162f";
            this.$emit("fechar", false);
        },

        async enviarCor() {
            let jsonObj = JSON.stringify(this.cor);

            this.enviando = true;
            let resposta = await fetch(this.$URLAPI_BASE + "/api/cores", {
                method: "post",
                body: jsonObj,
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json",
                },
            });

            console.log('Resposta da API:', resposta);
            if (resposta.status == 201) {
                let conteudo = await resposta.json();

                this.enviando = false;

                console.log('Objeto retornado da API:', conteudo);

                this.$emit('fechar', true);
                return;
            }
            this.enviando = false;
            alert('Ocorreu um erro ao enviar a cor. Status: ' + resposta.status);
        },
    },

    computed: {
        preenchido() {
            return this.cor.nome != null;
        },
    },

    components: {
        "input-layout": httpVueLoader("../components/InputLayout.vue"),
    },
};
</script>

<style scoped>
.modal-cor {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.253);
}

.modal-cor__container {
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

.modal-cor__header {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-cor__titulo {
    font-size: 1.2em;
}

.modal-cor__fechar {
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

.modal-cor__fechar:hover {
    background-color: rgba(0, 0, 0, 0.13);
}

.modal-cor__form > * {
    margin-bottom: 24px;
}

.label-cor {
    display: flex;
    width: fit-content;
    align-items: center;
    cursor: pointer;
}

.label-cor__view {
    width: 60px;
    height: 30px;
    border-radius: 15px;
    margin-left: 12px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
}

.label-cor__input {
    width: 0;
    height: 0;
}

.label-cor__ocultar {
    width: 0;
    height: 0;
    overflow: hidden;
}

.modal-cor__footer {
    padding-top: 24px;
    margin-top: 12px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>