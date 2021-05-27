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
        <div
            id="base"
            class="secao-cadastro"
            :class="{ desativado: etapas.base }"
        >
            <h2 class="secao-cadastro__titulo">Informações base</h2>
            <div class="secao-cadastro__grid">
                <input-layout maxlength="60" v-model="roupa.descricao"
                    >Descrição</input-layout
                >
                <input-layout maxlength="8" type="moeda" v-model="precoDigitado"
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
                @click="concluirEtapa('base', 'cores')"
                class="btn"
                :disabled="!primeiroConcluido"
            >
                Continuar <i class="fas fa-arrow-right"></i>
            </button>
        </div>

        <!-- SEÇÃO DE CORES -->
        <div
            id="cores"
            v-if="etapas.base"
            class="secao-cadastro"
            :class="{ desativado: etapas.cores }"
        >
            <h2 class="secao-cadastro__titulo">Cor</h2>
            <div class="secao-cadastro__grid colunas-3">
                <div
                    class="item-selecionado"
                    v-for="(cor, i) in coresSelecionadas"
                    :key="i"
                >
                    <div
                        class="container-cor"
                        :style="'background-color: ' + cor.valor"
                    ></div>
                    <span>{{ cor.nome }}</span>
                    <div class="btn-excluir" @click="removerCor(i)">
                        <i class="fas fa-times"></i>
                    </div>
                </div>

                <div class="area-adicionar">
                    <button
                        @click="abrirModal('modalCor')"
                        class="btn btn-adicionar"
                    >
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
            <div class="secao-cadastro__botoes">
                <span
                    @click="voltarEtapa('base')"
                    class="btn-voltar btn-voltar--span"
                    >Voltar</span
                >
                <button
                    @click="concluirEtapa('cores', 'tamanhos')"
                    class="btn btn-continuar"
                    :disabled="!segundoConcluido"
                >
                    Continuar <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>

        <!-- SEÇÃO DE TAMANHOS -->
        <div id="tamanhos" v-if="etapas.cores" class="secao-cadastro">
            <h2 class="secao-cadastro__titulo">Tamanhos</h2>
            <span style="margin-right: 12px"
                >Escolha um tipo para os tamanhos:</span
            >

            <input v-model="roupa.tipoTamanho" type="radio" name="tipoTamanho" id="letra" value="LETRA"/>
            <label style="margin-right: 12px" for="letra">Letras</label>
            <input v-model="roupa.tipoTamanho" type="radio" name="tipoTamanho" id="numero" value="NUMERO"/>
            <label for="numero">Números</label>

            <div v-if="roupa.tipoTamanho" class="area-modelos">
                <div
                    class="area-modelos__modelo"
                    v-for="(modelo, indexModelo) in roupa.modelos"
                    :key="indexModelo"
                >
                    <div class="area-modelos__cor flex">
                        <div class="container-cor" :style="'background-color: ' + modelo.cor.valor"></div>
                        <span>{{ modelo.cor.nome }}</span>
                    </div>
                    

                    <div class="secao-cadastro__grid colunas-3">

                        <div
                            class="item-selecionado tamanho"
                            v-for="(tamanhoModelo, indexTamanho) in modelo.tamanhosModelo"
                            :key="indexTamanho">
                            <span>{{ 'Tam.: ' + tamanhoModelo.tamanho + ' | Qnt.: ' + tamanhoModelo.quantidade}}</span>
                            <div class="btn-excluir" @click="removerTamanho(modelo.tamanhosModelo, indexTamanho)">
                                <i class="fas fa-times"></i>
                            </div>
                        </div>

                        <div class="area-adicionar">
                            <button
                                @click="adicionarTamanho(modelo)"
                                class="btn btn-adicionar"
                            >
                                <i class="fas fa-plus"></i> Adicionar tamanho
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="final-secao" />
            <div class="secao-cadastro__botoes">
                <span
                    @click="voltarEtapa('cores')"
                    class="btn-voltar btn-voltar--span"
                    >Voltar</span
                >
                <button @click="console.log(roupa)" class="btn btn-continuar" :disabled="!terceiroConcluido">
                    Continuar <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>

        <snack-bar ref="snackbar"></snack-bar>
        <tamanho-modal ref="tamanhoModal" @enviar="tamanhoSelecionado"></tamanho-modal>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            modal: {
                modalCor: false,
                modalTamanho: false,
            },
            etapas: {
                base: false,
                cores: false,
                tamanhos: false,
            },
            categorias: [],
            tamanhos: [],
            generos: ["MASCULINO", "FEMININO", "UNISSEX"],
            tiposTamanhos: ["LETRAS", "NÚMEROS"],
            precoDigitado: null,
            roupa: {
                descricao: null,
                preco: null,
                categoria: null,
                ativo: false,
                tipoTamanho: null,
                genero: null,
                modelos: [],
            },
            coresSelecionadas: [],
            tamanhosSelecionados: [],
        };
    },

    methods: {
        listarCategorias() {
            let _this = this;

            fetch(this.$URLAPI_BASE + "/api/categorias")
                .then((res) => res.json())
                .then((res) => {
                    _this.categorias = res;
                });
        },

        listarTamanhos() {
            let _this = this;

            fetch(this.$URLAPI_BASE + "/api/tamanhos/" + this.roupa.tipoTamanho)
                .then((res) => res.json())
                .then((res) => {
                    _this.tamanhos = res;
                });
        },

        teclaPressionada(evt) {},

        concluirEtapa(nomeEtapa, proxEtapa) {
            this.etapas[nomeEtapa] = true;

            if (proxEtapa) {
                setTimeout(function () {
                    document
                        .getElementById(proxEtapa)
                        .scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        },

        voltarEtapa(nomeEtapa) {
            this.etapas[nomeEtapa] = false;
            document
                .getElementById(nomeEtapa)
                .scrollIntoView({ behavior: "smooth" });
        },

        abrirModal(modal) {
            this.modal[modal] = true;
        },

        abrirSnackbar(mensagem, timeout, botao, icone) {
            this.$refs.snackbar.abrir(mensagem, timeout, botao, icone);
        },

        corSelecionada(cor) {
            let corAux = this.coresSelecionadas.find((el) => {
                return el.id === cor.id;
            });

            if (corAux) {
                this.abrirSnackbar(
                    "Essa cor já foi selecionada",
                    3000,
                    "fechar",
                    1
                );
                return;
            }
            this.modal.modalCor = false;

            this.coresSelecionadas.push(cor);
        },

        removerCor(index) {
            this.coresSelecionadas.splice(index, 1);
        },

        tipoTamanhoSelecionado(tipoTamanho) {
            if (tipoTamanho == "LETRAS") {
                this.roupa.tipoTamanho = "0";
            }
            if (tipoTamanho == "NÚMEROS") {
                this.roupa.tipoTamanho = "1";
            }
            this.listarTamanhos();
        },

        coresParaModelos() {
            let modelos = [];

            this.coresSelecionadas.forEach((cor) => {
                modelos.push({ cor, tamanhosModelo: [] });
            });
            this.roupa.modelos = modelos;
        },

        adicionarTamanho(modelo) {
            this.$refs.tamanhoModal.abrir(this.roupa.tipoTamanho, modelo);
        },

        tamanhoSelecionado(evento) {
            let modelo = evento.modelo;
            modelo.tamanhosModelo.push(evento.conteudo);
            this.$refs.tamanhoModal.fechar();
        },

        removerTamanho(lista, index) {
            lista.splice(index, 1);
        }
    },

    mounted() {
        this.listarCategorias();
    },

    computed: {
        primeiroConcluido() {
            return (
                this.roupa.descricao &&
                this.roupa.preco &&
                this.roupa.categoria &&
                this.roupa.genero
            );
        },
        segundoConcluido() {
            return this.coresSelecionadas.length > 0;
        },
        terceiroConcluido() {
            if (this.roupa.modelos.length > 0) {
                return !this.roupa.modelos.some(modelo => {
                    return modelo.tamanhosModelo.length === 0;
                })
            }
            return false;
        },

        tipoTamanho() {
            return this.roupa.tipoTamanho;
        },
    },

    watch: {
        precoDigitado(valor) {
            this.roupa.preco = this.$moeda.paraFloat(valor);
        },

        tipoTamanho(valor) {
            this.coresParaModelos();
        },

        coresSelecionadas() {
            if (this.roupa.tipoTamanho !== null) {
                this.coresParaModelos();
            }
        }
    },

    components: {
        "input-layout": httpVueLoader("../components/InputLayout.vue"),
        "select-layout": httpVueLoader("../components/SelectLayout.vue"),
        "cor-modal": httpVueLoader("../components/Cores.vue"),
        "tamanho-modal": httpVueLoader("../components/Tamanhos.vue"),
        "snack-bar": httpVueLoader("../components/Snackbar.vue"),
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
    scroll-behavior: smooth;
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
    font-weight: 600;
}

.btn-voltar:hover {
    color: #353535;
}

.btn-voltar--span {
    margin-right: 32px;
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

.secao-cadastro__botoes {
    display: flex;
    align-items: center;
}

.secao-cadastro.desativado {
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
}

.secao-cadastro__grid.colunas-3 {
    grid-template-columns: repeat(3, 220px);
    row-gap: 16px;
    column-gap: 26px;
}

.btn-adicionar {
    border-radius: 20px;
    width: 220px;
}

.area-adicionar {
    position: relative;
}

.item-selecionado {
    height: 40px;
    border-radius: 20px;
    background-color: rgb(237, 238, 240);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 6px;
    position: relative;
}

.item-selecionado.tamanho {
    padding-left: 16px;
}

.btn-excluir {
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

.area-modelos {
    margin: 32px 0;
}

.area-modelos__modelo {
    padding: 16px 0;
}

.area-modelos__cor {
    justify-content: flex-start;
    margin-bottom: 16px;
}
</style>