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

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.area-tabela {
  padding: 0 10px;
}

.pesquisa {
    display: flex;
}

.txt-pesquisa {
    width: 450px;
    padding: 12px;
    border: 2px solid #cecece;
    border-right: 0;
    border-radius: 3px 0 0 3px;
}

.btn-pesquisa {
    padding: 12px;
    background-color: #171b1f;
    border: solid 2px #171b1f;
    color: #ffffff;
    border-radius: 0 3px 3px 0;
}

.btn-novo {
    padding: 12px;
    background-color: #15b156;
    border: none;
    border-radius: 3px;
    color: #ffffff;
}

.tabela {
  width: 100%;
  border-collapse: collapse;
}

.tabela th {
  background-color: #171b1f;
  color: #ffffff;
}

.tabela th,
td {
  border: solid 1px #ffffff;
  padding: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tabela tr:nth-child(even) {
  background-color: #f1f1f1;
}

.tabela tr:hover {
  background-color: #c4c4c4;
}

.td-acoes {
  width: 100px;
}

.btn-acoes {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.visualizar {
  color: #15b156;
}

.editar {
  color: #f1a922;;
}

.remover {
  color: #e72828;
}
</style>