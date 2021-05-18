<template>
    <!-- Estrutura da página aqui, é necessário manter essa div como pai dos outros elementos -->
    <div class="form_users">
        <div class="container">  
            <form action="#">
                <div class="title">REGISTRO</div>
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Nome</span>
                        <input type="text" placeholder="Nome completo" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Cargo</span>
                        <input type="text" placeholder="Cargo ocupado" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Email</span>
                        <input type="text" placeholder="example@email.com" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Número de telefone</span>
                        <input type="text" placeholder="Telefone (DDD + número)" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Senha</span>
                        <input type="text" placeholder="Senha" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Confirme a senha</span>
                        <input type="text" placeholder="Confirme a senha" required>
                    </div>

                </div>
                <div class="button">
                <input type="submit" value="REGISTRAR">
                </div>
            </form>
        </div>

    </div>
</template>

<script>
//código JavaScript vem aqui, com a estrutura do Vue, não é necessário mexer
module.exports = {

}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.form_users{
    display: flex;
    height: 100vh;
    justify-content:center;
    align-items: center;
    padding: 10px;
    background:  #fff;
}

.container{
    max-width: 700px;
    width: 100%;
    height:75%;
    background: #fff;
    padding: 25px 30px;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
}

.container .title{
  font-size: 25px;
  font-weight: 500;
  padding: 10px;
  align-items: center;
  position: relative;
}
.container .title::before{
  content: " ";
  position: absolute;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: #171B1F;
}



.container form .user-details{
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

form .user-details .input-box{
    margin: 20px 0 12px 0;
    width: calc(100% /2 - 20px);
}


.user-details .input-box input{
    height: 45px;
    width: 100%;
    outline: none;
    border-radius:5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
}

.user-details .input-box .details{
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}
.user-details .input-box input:focus,
.user-details .input-box input:valid{
    border-color:  #171B1F;
}

form .button{
    height: 45px;
    margin: 45px 0;
}

form .button input{
    height: 100%;
    width: 100%;
    outline: none;
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 5px;
    background: #171B1F;
}

form .button input:hover{
    background: #282e35;
}









</style>