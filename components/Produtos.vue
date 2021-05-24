<template>
  <!-- Estrutura da página aqui, é necessário manter essa div como pai dos outros elementos -->
  <div class="">
    <div class="toolbar">
      <button v-on:click="$emit('alterar-componente', 'app-cadastro-produto')" class="btn-novo">
        <i class="fas fa-plus-circle"></i> Adicionar
      </button>
      <div class="pesquisa">
        <input class="txt-pesquisa" type="text" placeholder="Buscar..." />
        <button class="btn-pesquisa"><i class="fas fa-search"></i></button>
      </div>
    </div>
    <div class="area-tabela">
      <table class="tabela">
        <tr>
          <th>ID</th>
          <th>Descrição</th>
          <th>Preço Unit.</th>
          <th>Qtd Total</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
        <tr v-for="produto in produtos">
          <td>{{produto.id}}</td>
          <td>{{produto.descricao}}</td>
          <td>R$ {{produto.preco.toFixed(2).replace('.', ',')}}</td>
          <td>{{produto.quantidadeTotal}}</td>
          <td>
            <span v-if="produto.ativo">Ativo</span>
            <span v-else>Desativado</span>
          </td>
          <td class="td-acoes">
            <button class="btn-acoes visualizar">
              <i class="fas fa-eye"></i>
            </button>
            <button class="btn-acoes editar"><i class="fas fa-pen"></i></button>
            <button class="btn-acoes remover">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>

        <tr>
          <td>123</td>
          <td>Camiseta Preta MOCKADO</td>
          <td>R$ 10,00</td>
          <td>5</td>
          <td>Ativo</td>
          <td class="td-acoes">
            <button class="btn-acoes visualizar">
              <i class="fas fa-eye"></i>
            </button>
            <button class="btn-acoes editar"><i class="fas fa-pen"></i></button>
            <button class="btn-acoes remover">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

//código JavaScript vem aqui, com a estrutura do Vue, não é necessário mexer
module.exports = {
  data: function() {
    return {
      produtos: [],
    }
  },
  methods: {
    listarProdutos: function() {
      let _this = this;

      fetch(this.$URLAPI_BASE + "/api/roupas")
        .then(res => res.json())
        .then(res => {
          _this.produtos = res.content;
        });
    },
  },
  
  mounted: function() {
    this.listarProdutos();
  }
}
</script>

<style scoped>
/* estilização do componente aqui, é só colocar as classes nos elementos dentro da tag template */

</style>