<template>
    <!-- Estrutura da página aqui, é necessário manter essa div como pai dos outros elementos -->
    <div class="exemplo">
        <div class="dash-wrapper">
            <div class="stats-container flex">
                <div class="dash-card">
                    <div class="card-block">
                        <div class="row align-items-center">
                            <div class="card-info">
                                <h4 class="text-orange f-w-500"> R$ 4.590,23 </h4>
                                <h6 class="text-light">receita do mês</h6>
                            </div>
                            <div class="card-icon">
                                <i class="fas fa-dollar-sign"></i>
                            </div>                          
                        </div>
                    </div>
                    <div class="card-footer bg-orange flex">
                        <div class="footer-info flex">
                        <div><p class="change f-w-300">+55% <span class="small">(último mês)</span></p></div> 
                        <div><i class="fas fa-chart-line"></i></div>
                        </div>
                    </div>
                </div>

                <div class="dash-card">
                    <div class="card-block">
                        <div class="row align-items-center">
                            <div class="card-info">
                                <h4 class="text-blue f-w-500"> 203 </h4>
                                <h6 class="text-light">vendas</h6>
                            </div>
                            <div class="card-icon">
                                <i class="fas fa-shopping-cart"></i>
                            </div>                          
                        </div>
                    </div>
                    <div class="card-footer bg-blue flex">
                        <div class="footer-info flex">
                        <div><p class="change f-w-300">+55% <span class="small">(último mês)</span></p></div> 
                        <div><i class="fas fa-chart-line"></i></div>
                        </div>
                    </div>
                </div> 

                <div class="dash-card">
                    <div class="card-block">
                        <div class="row align-items-center">
                            <div class="card-info">
                                <h4 class="text-green f-w-500"> 4.837 </h4>
                                <h6 class="text-light">visitas</h6>
                            </div>
                            <div class="card-icon">
                                <i class="fas fa-eye"></i>
                            </div>                          
                        </div>
                    </div>
                    <div class="card-footer bg-green flex">
                        <div class="footer-info flex">
                        <div><p class="change f-w-300">+55% <span class="small">(último mês)</span></p></div> 
                        <div><i class="fas fa-chart-line"></i></div>
                        </div>
                    </div>
                </div>                 
                <div class="dash-card">
                    <div class="card-block">
                        <div class="row align-items-center">
                            <div class="card-info">
                                <h4 class="text-pink f-w-500"> 387 </h4>
                                <h6 class="text-light">novos usuários</h6>
                            </div>
                            <div class="card-icon">
                                <i class="fas fa-users"></i>
                            </div>                          
                        </div>
                    </div>
                    <div class="card-footer bg-pink flex">
                        <div class="footer-info flex">
                        <div><p class="change f-w-300">+55% <span class="small">(último mês)</span></p></div> 
                        <div><i class="fas fa-chart-line"></i></div>
                        </div>
                    </div>
                </div>                   
            </div>
        </div>
</template>

<script>
//código JavaScript vem aqui, com a estrutura do Vue, não é necessário mexer
module.exports = {

}
</script>

<style scoped>
/* estilização do componente aqui, é só colocar as classes nos elementos dentro da tag template */

.exemplo {
    font-size: 26px;
    text-align: center;
    padding: 32px;
}

.dash-wrapper{
    width: 100%;
    height: 1030px;
    flex-wrap: wrap;
    text-align: left;
}
.row{
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    justify-content: space-between;
    padding: 1.25rem;
}

.stats-container{
    justify-content: space-between;
}

.dash-card{
    position: relative;
    display: inline-block;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 5px;
    box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
    border: none;
    margin-bottom: 30px;
    width: 25%;
    justify-content: space-between;
    margin: 0 15px;
}

.fa-dollar-sign{
    color: black;
}
.card-footer {
    border-top: none;
    height: 40px;    
    color: white;
    font-size: 22px;
}

.card-footer:last-child{
    border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
}

.footer-info{
    width: 100%;
    justify-content: space-between;
    padding: 0px 10px;
}

.card-block{
    padding: 0px 15px;
}

h6{
    font-size: 14px;
}

h4{
    font-size: 1.5rem;
}

.small{
    font-size: 12px;   
}

.card-footer p, i{
    display: inline-flex;
}

.text-orange{
    color: #fe9365;
}

.bg-orange{
    background: linear-gradient(to right, #fe9365, #feb798);
}

.bg-green{
    background: linear-gradient(to right, #0ac282, #0df3a3);
}
.bg-pink{
    background: linear-gradient(to right, #fe5d70, #fe909d);
}
.bg-blue{
    background: linear-gradient(to right, #01a9ac, #01dbdf);
}

.change{
    font-size: 20px;
}

.f-w-300{
    font-weight: 300;
}
.f-w-400{
    font-weight: 400;
}
.f-w-500{
    font-weight: 500;
}

.text-light{
    color: rgb(145, 154, 163);
    font-weight: 400;
    margin-top: 10px;
}

.text-green{
    color: rgb(10, 194, 130);
}

.text-pink{
    color: #fe5d70;
}

.text-blue{
    color: #01a9ac;
}
</style>