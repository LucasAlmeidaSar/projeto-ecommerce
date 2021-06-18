<template>
  <!-- Estrutura da página aqui, é necessário manter essa div como pai dos outros elementos -->
  <div>
    <div class="toolbar">
      <div class="pesquisa">
        <input class="txt-pesquisa" type="text" placeholder="Buscar..." />
        <button class="btn-pesquisa"><i class="fas fa-search"></i></button>
      </div>
    </div>
    <div class="area-tabela">
      <table class="tabela">
        <tr>
          <th>ID</th>
          <th>Cliente</th>
          <th style="width: 100px">Momento</th>
          <th>Total</th>
          <th style="min-width: 100px">Status</th>
          <th>Ações</th>
        </tr>
        <tr v-for="(pedido, i) in pedidos" :key="i">
          <td>{{pedido.id}}</td>
          <td>{{pedido.nomeCliente}}</td>
          <td>{{new Date(pedido.dataPedido).toLocaleString()}}</td>
          <td>R$ {{pedido.total.toFixed(2).replace('.', ',')}}</td>
          <td>{{pedido.status}}</td>
          <td class="td-acoes">
            <button class="btn-acoes visualizar">
              <i class="fas fa-eye"></i>
            </button>
            <button title="Remover produto" class="btn-acoes remover">
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
      pedidos: [],
    }
  },
  methods: {
    async listarPedidos() {
        this.pedidos = await this.$api.getListaPedidos();
    },
  },
  
  mounted: function() {
    document.title = "Vendas";
    this.listarPedidos();
  }
}
</script>

<style scoped>
/* estilização do componente aqui, é só colocar as classes nos elementos dentro da tag template */

</style>