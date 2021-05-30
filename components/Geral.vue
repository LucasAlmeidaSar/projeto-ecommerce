<template>
    <div>
        <div class="abas">
            <button
                @click="abaAtual = 'aba-categorias'"
                class="abas__btn"
                :class="{ ativo: abaAtual == 'aba-categorias' }"
            >
                Categorias
            </button>
            <button
                @click="abaAtual = 'aba-cores'"
                class="abas__btn"
                :class="{ ativo: abaAtual == 'aba-cores' }"
            >
                Cores
            </button>
        </div>

        <template v-if="abaAtual == 'aba-categorias'">
            <div class="toolbar">
                <button class="btn-novo" @click="abrirModalCategoria(null)">
                    <i class="fas fa-plus-circle"></i> Adicionar
                </button>
                <div class="pesquisa">
                    <input
                        class="txt-pesquisa"
                        type="text"
                        placeholder="Buscar..."
                    />
                    <button class="btn-pesquisa">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <div class="area-tabela">
                <table class="tabela">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Há Produtos</th>
                        <th>Ações</th>
                    </tr>

                    <tr v-for="(categoria, index) in categorias" :key="index">
                        <td>{{ categoria.id }}</td>
                        <td>{{ categoria.nome }}</td>
                        <td>Sim</td>
                        <td class="td-acoes">
                            <button
                                @click="abrirModalCategoria(categoria)"
                                class="btn-acoes editar"
                            >
                                <i class="fas fa-pen"></i>
                            </button>
                            <button
                                class="btn-acoes remover"
                                @click="removerCategoria(categoria.id)"
                            >
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </template>

        <template v-if="abaAtual == 'aba-cores'">
            <div class="toolbar">
                <button class="btn-novo" @click="abrirModalCor(null)">
                    <i class="fas fa-plus-circle"></i> Adicionar
                </button>
                <div class="pesquisa">
                    <input
                        class="txt-pesquisa"
                        type="text"
                        placeholder="Buscar..."
                    />
                    <button class="btn-pesquisa">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <div class="area-tabela">
                <table class="tabela">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>
                                Há Produtos
                                <i
                                    title="Se essa cor está presente em algum dos produtos cadastrados ou não"
                                    class="fas fa-question-circle"
                                ></i>
                            </th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cor, index) in cores" :key="index">
                            <td>{{ cor.id }}</td>
                            <td>{{ cor.nome }}</td>
                            <td style="text-align: center" :title="cor.valor">
                                <span
                                    class="cor"
                                    :style="`background-color: ${cor.valor}`"
                                ></span>
                            </td>
                            <td>
                                <template v-if="cor.temRegistros">Sim</template
                                ><template v-else>Não</template>
                            </td>
                            <td class="td-acoes">
                                <button
                                    class="btn-acoes editar"
                                    @click="abrirModalCor(cor)"
                                >
                                    <i class="fas fa-pen"></i>
                                </button>
                                <button
                                    class="btn-acoes remover"
                                    @click="removerCor(cor.id)"
                                >
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>

        <modal-categoria
            ref="modalCategoria"
            @fechar="listarCategorias()"
        ></modal-categoria>
        <modal-cor ref="modalCor" @fechar="listarCores()"></modal-cor>
        <snack-bar ref="snackbar"></snack-bar>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            categorias: [],
            cores: [],
            abaAtual: "aba-categorias",
        };
    },

    methods: {
        async listarCategorias() {
            let resposta = await fetch(this.$URLAPI_BASE + "/api/categorias");

            if (resposta.ok) {
                this.categorias = await resposta.json();
            }
        },

        async listarCores() {
            let resposta = await fetch(this.$URLAPI_BASE + "/api/cores");

            if (resposta.ok) {
                this.cores = await resposta.json();
            }
        },

        async removerCor(id) {
            let resposta = await fetch(this.$URLAPI_BASE + "/api/cores/" + id, {
                method: "delete",
            });

            if (resposta.ok) {
                this.$refs.snackbar.abrir("Cor removida", 3000, "fechar", 0);
                this.listarCores();
                return;
            }

            this.$refs.snackbar.abrir("Erro ao remover cor", 3000, "fechar", 1);
        },

        async removerCategoria(id) {
            let resposta = await fetch(
                this.$URLAPI_BASE + "/api/categorias/" + id,
                { method: "delete" }
            );

            if (resposta.ok) {
                this.$refs.snackbar.abrir(
                    "Categoria removida",
                    3000,
                    "fechar",
                    0
                );
                this.listarCategorias();
                return;
            }

            this.$refs.snackbar.abrir(
                "Erro ao remover categoria",
                3000,
                "fechar",
                1
            );
        },

        abrirModalCategoria(categoria) {
            this.$refs.modalCategoria.abrir(categoria);
        },

        abrirModalCor(cor) {
            this.$refs.modalCor.abrir(cor);
        },
    },

    mounted() {
        this.listarCategorias();
        this.listarCores();
    },

    components: {
        "snack-bar": httpVueLoader("./Snackbar.vue"),
        "modal-categoria": httpVueLoader("./Categoria.vue"),
        "modal-cor": httpVueLoader("./NovaCor.vue"),
    },
};
</script>

<style scoped>
.abas {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.abas__btn {
    background-color: transparent;
    padding: 16px 20px;
    position: relative;
    flex-basis: 150px;
    font-weight: 400;
    text-transform: uppercase;
    transition: background 400ms ease;
}

.abas__btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.abas__btn.ativo::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(26, 26, 26);
}

.abas__btn.ativo {
    background-color: rgb(209, 209, 209);
}

</style>