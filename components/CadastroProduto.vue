<template>
    <div class="cadastro-produto">
        <div class="cabecalho-cadastro">
            <h1 class="cabecalho-cadastro__titulo">Novo produto</h1>

            <span
                class="btn-voltar"
                v-on:click="$emit('alterar-componente', 'app-produtos')"
            >
                <i class="fas fa-arrow-left"></i> Voltar
            </span>
        </div>

        <!-- SEÇÃO BASE -->
        <div class="secao-cadastro">
            <h2 class="secao-cadastro__titulo">Informações base</h2>
            <div class="secao-cadastro__grid">
                <input-layout v-model="roupa.descricao">Descrição</input-layout>
                <input-layout
                    maxlength="15"
                    type="moeda"
                    v-model="precoDigitado"
                    >Preço (R$)</input-layout
                >
                <select-layout
                    title="Categoria"
                    v-model="roupa.categoria"
                    :options="categorias"
                    campo="nome"
                    placeholder="Categoria"
                ></select-layout>
                <select-layout
                    title="Gênero"
                    v-model="roupa.genero"
                    :options="generos"
                    placeholder="Gênero"
                ></select-layout>
            </div>
            <hr class="final-secao" />
            <button
                @click="concluirEtapa('base')"
                class="btn"
                :disabled="!primeiroConcluido"
            >
                Continuar <i class="fas fa-arrow-right"></i>
            </button>
        </div>

        <!-- SEÇÃO DE CORES -->
        <div v-if="etapas.base" class="secao-cadastro">
            <h2 class="secao-cadastro__titulo">Cor</h2>
            <div id="cores" class="secao-cadastro__grid">

                <div class="cor-selecionada" v-for="(cor, i) in coresSelecionadas" :key="i">
                    <div class="container-cor" :style="'background-color: ' + cor.valor"></div>
                    <span>{{cor.nome}}</span>
                    <div class="btn-excluir-cor" @click="removerCor(i)"><i class="fas fa-times"></i></div>
                </div>

                <div class="adicionar-cor">
                    <button @click="teste" class="btn btn-adicionar">
                        <i class="fas fa-plus"></i> Adicionar cor
                    </button>
                    <cor-modal
                        @selected="corSelecionada"
                        :open="modal.modalCor"
                        ref="modalCor"
                        @fechar="modal.modalCor = false"
                    ></cor-modal>
                </div>

            </div>
            <hr class="final-secao" />
            <button class="btn btn-continuar" :disabled="!segundoConcluido">
                Continuar <i class="fas fa-arrow-right"></i>
            </button>
        </div>

    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            modal: {
                modalCor: false,
            },
            etapas: {
                base: false,
                cores: false,
                tamanhos: false,
            },
            categorias: [],
            generos: ["MASCULINO", "FEMININO", "UNISSEX"],
            precoDigitado: null,
            roupa: {
                descricao: null,
                preco: null,
                categoria: null,
                ativo: false,
                genero: null,
                modelos: [],
            },
            coresSelecionadas: [],
        };
    },

    methods: {
        listarCategorias: function () {
            let _this = this;

            fetch(this.$URLAPI_BASE + "/api/categorias")
                .then((res) => res.json())
                .then((res) => {
                    _this.categorias = res;
                });
        },

        teclaPressionada(evt) {},

        concluirEtapa(nomeEtapa) {
            this.etapas[nomeEtapa] = true;
        },

        teste(e) {
            console.log(this.modal.modalCor);
            this.modal.modalCor = true;
            console.log(this.$refs.modalCor.$el);
        },

        corSelecionada(cor) {
            this.coresSelecionadas.push(cor);
            this.modal.modalCor = false;
        },

        removerCor(index) {
            this.coresSelecionadas.splice(index, 1);
        }
    },

    mounted() {
        this.listarCategorias();
    },

    computed: {
        primeiroConcluido: function () {
            return (
                this.roupa.descricao &&
                this.roupa.preco &&
                this.roupa.categoria &&
                this.roupa.genero
            );
        },
        segundoConcluido: function () {
            return this.coresSelecionadas.length > 0;
        }
    },

    watch: {
        precoDigitado(valor) {
            this.roupa.preco = this.$moeda.paraFloat(valor);
        },
    },

    components: {
        "input-layout": httpVueLoader("../components/InputLayout.vue"),
        "select-layout": httpVueLoader("../components/SelectLayout.vue"),
        "cor-modal": httpVueLoader("../components/Cores.vue"),
    },
};
</script>

<style scoped>
hr {
    margin: 32px -12px;
}

hr.final-secao {
    margin-top: 42px;
}

.cadastro-produto {
    padding: 16px 26px;
    font-size: 18px;
}

.cabecalho-cadastro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 18px;
}

.cabecalho-cadastro__titulo {
    font-size: 1.5em;
}

.btn-voltar {
    cursor: pointer;
    margin-bottom: 6px;
    display: block;
}

.secao-cadastro {
    padding: 32px;
    box-sizing: border-box;
    margin: 16px 0;
    border-radius: 8px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
}

.secao-cadastro__titulo {
    font-size: 1.4em;
    margin-bottom: 24px;
}

.secao-cadastro__grid {
    display: grid;
    column-gap: 32px;
    row-gap: 32px;
    grid-template-columns: auto auto;
}

#cores.secao-cadastro__grid {
    grid-template-columns: repeat(3, 220px);
    row-gap: 16px;
    column-gap: 26px;
}

.btn-adicionar {
    border-radius: 20px;
    width: 220px;
}

.adicionar-cor {
    position: relative;
}

.cor-selecionada {
    height: 40px;
    border-radius: 20px;
    background-color: rgb(237, 238, 240);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 6px;
    position: relative;
}

.btn-excluir-cor {
    position: absolute;
    right: 16px;
    top: 10px;
    cursor: pointer;
}

.container-cor {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 16px;
}
</style>