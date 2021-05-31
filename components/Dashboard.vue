<template>
  <!-- Estrutura da página aqui, é necessário manter essa div como pai dos outros elementos -->
  <div class="dash-wrapper">
    <div class="stats-container flex">
      <div class="dash-card">
        <div class="card-block">
          <div class="row align-items-center">
            <div class="card-info">
              <h4 class="text-orange f-w-500">R$ 4.590,23</h4>
              <h6 class="text-light">receita do mês</h6>
            </div>
            <div class="card-icon">
              <i class="fas fa-dollar-sign"></i>
            </div>
          </div>
        </div>
        <div class="card-footer bg-orange flex">
          <div class="footer-info flex">
            <div>
              <p class="change f-w-300">
                +55% <span class="small">(último mês)</span>
              </p>
            </div>
            <div><i class="fas fa-chart-line"></i></div>
          </div>
        </div>
      </div>

      <div class="dash-card">
        <div class="card-block">
          <div class="row align-items-center">
            <div class="card-info">
              <h4 class="text-blue f-w-500">203</h4>
              <h6 class="text-light">vendas</h6>
            </div>
            <div class="card-icon">
              <i class="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
        <div class="card-footer bg-blue">
          <div class="footer-info flex">
            <div>
              <p class="change f-w-300">
                +55% <span class="small">(último mês)</span>
              </p>
            </div>
            <div><i class="fas fa-chart-line"></i></div>
          </div>
        </div>
      </div>

      <div class="dash-card">
        <div class="card-block">
          <div class="row align-items-center">
            <div class="card-info">
              <h4 class="text-green f-w-500">4.837</h4>
              <h6 class="text-light">visitas</h6>
            </div>
            <div class="card-icon">
              <i class="fas fa-eye"></i>
            </div>
          </div>
        </div>
        <div class="card-footer bg-green">
          <div class="footer-info flex">
            <div>
              <p class="change f-w-300">
                +55% <span class="small">(último mês)</span>
              </p>
            </div>
            <div><i class="fas fa-chart-line"></i></div>
          </div>
        </div>
      </div>
      <div class="dash-card">
        <div class="card-block">
          <div class="row align-items-center">
            <div class="card-info">
              <h4 class="text-pink f-w-500">387</h4>
              <h6 class="text-light">novos usuários</h6>
            </div>
            <div class="card-icon">
              <i class="fas fa-users"></i>
            </div>
          </div>
        </div>
        <div class="card-footer bg-pink">
          <div class="footer-info flex">
            <div>
              <p class="change f-w-300">
                +55% <span class="small">(último mês)</span>
              </p>
            </div>
            <div><i class="fas fa-chart-line"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-chart">
      <div class="container-canvas"><canvas id="myChart"></canvas></div>
      <div class="container-canvas"><canvas id="myChart2"></canvas></div>
    </div>
    <div class="dash-bottom-info-container">
      <div class="dash-bottom-card novos">
        <div class="dash-bottom-card-content">
          <div class="table-title bg-orange">
            <span class="title f-w-300 text-white">Novos pedidos</span>
          </div>
          <table class="table-products">
            <thead class="table-header-head">
              <tr class="table-columns">
                <th class="product-name text-light">ID</th>
                <th class="products-sold text-light">cliente</th>
                <th class="products-price text-light">valor</th>
                <th class="products-stock text-light">situação</th>
                <th class="products-details text-light">detalhes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="f-w-300">11234</span>
                </td>
                <td>
                  <span class="f-w-300">Silascou</span>
                </td>
                <td>
                  <span class="f-w-300">R$ 167,32</span>
                </td>
                <td>
                  <span class="product-stock-span f-w-300 badge badge-pink">Aguardando Pag.</span>
                </td>
                <td>
                  <span class="f-w-300">
                    <a href="#">ver detalhes</a></span>
                </td>
              </tr>
              <tr class="">
                <td>
                  <span class="f-w-300">11233</span>
                </td>
                <td>
                  <span class="f-w-300">Eren Yeager</span>
                </td>
                <td>
                  <span class="f-w-300">R$ 523,59</span>
                </td>
                <td>
                  <span class="product-stock-span f-w-300 badge badge-blue">
                    Envio pendente
                  </span>
                </td>
                <td>
                  <span class="f-w-300">
                    <a href="/detalhes">ver detalhes</a></span>
                </td>
              </tr>

              <tr class="">
                <td>
                  <span class="f-w-300">11232</span>
                </td>
                <td>
                  <span class="f-w-300">Nobara Kugisaki</span>
                </td>
                <td>
                  <span class="f-w-300">R$ 3.249,39</span>
                </td>
                <td>
                  <span class="product-stock-span f-w-300 badge badge-green">Enviado</span>
                </td>
                <td>
                  <span class="f-w-300">
                    <a href="/detalhes">ver detalhes</a></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="dash-bottom-card mais-vendidos">
        <div class="dash-bottom-card-content">
          <div class="table-title bg-blue">
            <span class="f-w-300 text-white">Produtos mais vendidos</span>
          </div>
          <table class="table-products">
            <thead class="table-header-head">
              <tr class="table-columns">
                <th class="product-name text-light">produto</th>
                <th class="products-sold text-light">vendidos</th>
                <th class="products-price text-light">preço</th>
                <th class="products-stock text-light">estoque</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="f-w-300">Vestido Zara Branco</span>
                </td>
                <td>
                  <span class="f-w-300">387</span>
                </td>
                <td>
                  <span class="f-w-300">R$ 229,99</span>
                </td>
                <td>
                  <span class="product-stock-span f-w-300">43</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="f-w-300">Camisa Manga Longa Gucci</span>
                </td>
                <td>
                  <span class="f-w-300">238</span>
                </td>
                <td>
                  <span class="f-w-300">R$ 339,99</span>
                </td>
                <td>
                  <span class="product-stock-span f-w-300">21</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="f-w-300">Calça Legging CK</span>
                </td>
                <td>
                  <span class="f-w-300">203</span>
                </td>
                <td>
                  <span class="f-w-300">R$ 109,99</span>
                </td>
                <td>
                  <span class="product-stock-span f-w-300">56</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="dash-bottom-card">
        <div class="dash-bottom-card-content">
          <div class="table-title bg-pink">
            <span class="title f-w-300 text-white">Principais acessos</span>
          </div>
          <table class="table-products">
            <thead class="table-header-head">
              <tr class="table-columns">
                <th class="product-name text-light">país</th>
                <th class="products-sold text-light">visitas totais</th>
                <th class="products-price text-light">usuários</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td>
                  <span class="f-w-300">Brasil</span>
                </td>
                <td>
                  <span class="f-w-300">30.827</span>
                </td>
                <td>
                  <span class="f-w-300">4.659</span>
                </td>
              </tr>
              <tr class="">
                <td>
                  <span class="f-w-300">Estados Unidos</span>
                </td>
                <td>
                  <span class="f-w-300">22.238</span>
                </td>
                <td>
                  <span class="f-w-300">2.943</span>
                </td>
              </tr>

              <tr class="">
                <td>
                  <span class="f-w-300">Argentina</span>
                </td>
                <td>
                  <span class="f-w-300">19.595</span>
                </td>
                <td>
                  <span class="f-w-300">2.058</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//código JavaScript vem aqui, com a estrutura do Vue, não é necessário mexer
module.exports = {
  mounted: () => {
    let myChart = document.getElementById("myChart").getContext("2d");

    let massPopChart = new Chart(myChart, {
      type: "line",
      data: {
        labels: [
          "Segunda",
          "Terça",
          "Quarta",
          "Quinta",
          "Sexta",
          "Sábado",
          "Domingo",
        ],
        datasets: [
          {
            label: "Receita (diária)",
            data: [3658, 5013, 5272, 8839, 9332, 13232, 11604],
            backgroundColor: "rgba(200, 12, 12, 1)",
            tension: 0.4,
            borderColor: "rgba(200, 12, 12, 1)",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        borderJoinStyle: "round",
        radius: 6,
        hitRadius: 10,
        hoverRadius: 6,
        resposive: true
      }
    });

    let myChart2 = document.getElementById("myChart2").getContext("2d");

    let massPopChart2 = new Chart(myChart2, {
      type: "pie",
      data: {
        labels: ["Casual", "Praia", "Inverno", "Formal"],
        datasets: [
          {
            data: [25, 34, 18, 23],
            backgroundColor: [
              "rgba(236, 28, 28, 0.6)",
              "rgba(28, 236, 32, 0.6)",
              "rgba(233, 236, 28, 0.6)",
              "rgba(136, 28, 236, 0.6)",
            ],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  },
};
</script>

<style scoped>
/* estilização do componente aqui, é só colocar as classes nos elementos dentro da tag template */

.dash-wrapper {
  width: 100%;
  text-align: left;
  padding: 32px 32px;
}

.dash-wrapper a{
  text-decoration: underline;
}
.dash-wrapper a:hover{
  color:#7b7d81;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
}

.stats-container {
  justify-content: space-between;
}

.container-canvas {
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-right: 35px;
  border: none;
  height: 450px;
}
.container-canvas:last-child {
  margin-right: 0px;
}

.dash-bottom-info-container {
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 2px));
  justify-content: space-between;
  column-gap: 16px;
  margin-top: 16px;
  width: 100%;
}

.dash-bottom-card{
  border-radius: 6px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;
}

.novos {
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
}

.mais-vendidos {
  width: fit-content;
}

.dash-card {
  position: relative;
  display: inline-block;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(69, 90, 100, 0.3);
  border: none;
  margin-bottom: 30px;
  margin-right: 25px;
  width: 25%;
  justify-content: space-between;
}

.dash-card i {
  font-size: 25px;
}

.dash-card:last-child {
  margin-right: 0px;
}

.container-chart {
  margin-top: 16px;
  display: grid;
  grid-template-columns: 65% 35%;
}

.badge {
    display: inline-block;
    min-width: 0px; /* pixel unit */
    padding: 5px 7px; /* pixel unit */
    border-radius: 4px;
    text-align: center;
    color: #fefefe;
}

.badge-green{
    background:#0ac282;
}

.badge-blue{
  background: #01a9ac;
}

.badge-pink{
  background: #fc6b7c;
}
.fa-dollar-sign {
  color: black;
}
.card-footer {
  border-top: none;
  height: 40px;
  color: white;
  font-size: 22px;
}

.card-footer:last-child {
  border-radius: 0 0 6px 6px;
}

.footer-info {
  width: 100%;
  justify-content: space-between;
  padding: 0px 10px;
}

.card-block {
  padding: 0px 15px;
}

h6 {
  font-size: 14px;
}

h4 {
  font-size: 1.5rem;
}

.table-header-head {
  background: rgb(246, 246, 247);
  color: #5d5f63;
  text-align: center;
}
.table-header-head th,
td {
  border: 1px solid rgba(145, 154, 163, 0.125);
  text-align: center;
}

table,
th,
td {
  padding: 0.6rem;
  text-align: center;
}


.dash-bottom-card-content {
  width: 100%;
}

.table-title {
  padding: 10px;
  font-size: 22px;
  text-align: center;
  border-radius: 6px 6px 0 0;
}

.table-products {
  width: 100%;
}

.small {
  font-size: 12px;
}

.card-footer p,
i {
  display: inline-flex;
}

.text-orange {
  color: #fe9365;
}

.bg-orange {
  background: linear-gradient(to right, #fe9365, #feb798);
}

.bg-green {
  background: linear-gradient(to right, #0ac282, #0df3a3);
}
.bg-pink {
  background: linear-gradient(to right, #fe5d70, #fe909d);
}
.bg-blue {
  background: linear-gradient(to right, #01a9ac, #01dbdf);
}

.change {
  font-size: 20px;
}

.f-w-300 {
  font-weight: 300;
}
.f-w-400 {
  font-weight: 400;
}
.f-w-500 {
  font-weight: 500;
}
.text-white {
  color: #fff;
}
.text-light {
  color: rgb(145, 154, 163);
  font-weight: 400;
  margin-top: 10px;
}

.text-green {
  color: rgb(10, 194, 130);
}

.text-pink {
  color: #fe5d70;
}

.text-blue {
  color: #01a9ac;
}

tbody, thead, table {
  width: 100%;
}
</style>
