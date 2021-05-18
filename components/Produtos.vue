<template>
  <!-- Estrutura da página aqui, é necessário manter essa div como pai dos outros elementos -->
  <div class="">
    <div class="toolbar">
      <button class="btn-novo"><i class="fas fa-plus-circle"></i> Adicionar</button>
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
        <tr>
          <td>123</td>
          <td>Camiseta Preta</td>
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
        <tr>
          <td>123</td>
          <td>Camiseta Preta</td>
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

        <tr>
          <td>123</td>
          <td>Camiseta Preta</td>
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
module.exports = {};
</script>

<style scoped>
/* estilização do componente aqui, é só colocar as classes nos elementos dentro da tag template */

</style>