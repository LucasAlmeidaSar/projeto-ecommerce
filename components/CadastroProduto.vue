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

        <div @click="teste" class="secao-cadastro">
            <h2 class="secao-cadastro__titulo">Informações base</h2>
            <div class="secao-cadastro__form">
                <input-layout v-model="roupa.descricao">Descrição</input-layout>
                <input-layout maxlength="15" type="moeda" v-model="precoDigitado">Preço (R$)</input-layout>
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
                @click="console.log(roupa)"
                class="btn btn-continuar"
                :disabled="!primeiroConcluido"
            >
                Continuar <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            categorias: [],
            generos: ["MASCULINO", "FEMININO", "UNISSEX"],
            categoria: null,
            precoDigitado: null,
            roupa: {
                descricao: null,
                preco: null,
                categoria: null,
                ativo: false,
                genero: null,
                modelos: [],
            },
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

        teclaPressionada(evt) {
            
        },

        teste() {
            console.log();
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
    },

    watch: {
        precoDigitado(valor) {
            this.roupa.preco = this.$moeda.paraFloat(valor);
        }
    },

    components: {
        "input-layout": httpVueLoader("../components/InputLayout.vue"),
        "select-layout": httpVueLoader("../components/SelectLayout.vue"),
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
    margin-bottom: 12px;
}

.secao-cadastro__form {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 32px;
    row-gap: 32px;
}

.secao-cadastro__select {
    height: 40px;
}
</style>