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

        <div class="secao-cadastro">
            <h2 class="secao-cadastro__titulo">Informações base</h2>
            <div class="secao-cadastro__form">
                <input-layout>Descrição</input-layout>
                <input-layout>Preço</input-layout>
                <select
                    class="secao-cadastro__select"
                    name="categoria"
                    id="categoria"
                >
                    <option :value="null" disabled selected hidden>
                        Categoria
                    </option>
                    <option
                        v-if="categorias.length == 0"
                        :value="null"
                        disabled
                    >
                        Não há categorias...
                    </option>
                    <option
                        v-for="categoria in categorias"
                        :value="categoria.id"
                    >
                        {{ categoria.nome }}
                    </option>
                </select>
                <select
                    class="secao-cadastro__select"
                    name="genero"
                    id="genero"
                >
                    <option :value="null" disabled selected hidden>
                        Gênero
                    </option>
                    <option value="MASCULINO">Masculino</option>
                    <option value="FEMININO">Feminino</option>
                    <option value="UNISSEX">Unissex</option>
                </select>
            </div>
            <hr class="final-secao" />
            <button class="btn btn-continuar">
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
        };
    },

    methods: {
        listarCategorias: function () {
            let _this = this;

            fetch(URLAPI_BASE + "/api/categorias")
                .then((res) => res.json())
                .then((res) => {
                    _this.categorias = res;
                });
        },
    },

    mounted() {
        this.listarCategorias();
    },

    components: {
        "input-layout": httpVueLoader("../components/InputLayout.vue"),
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