<template>
    <!-- Estrutura da página aqui, é necessário manter essa div como pai dos outros elementos -->
    <div class="">
        <div class="toolbar">
            <a href="#abrirModal" class="btn-novo">
              <i class="fas fa-plus-circle"></i> Adicionar
            </a>

            <div id="abrirModal" class="modal">
                <div class="container">
                    <form action="#">
                        <a href="#fechar" title="Fechar" class="fechar">x</a>
                        <div class="title">REGISTRO DE USUÁRIO</div>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Nome</span>
                                <input
                                    type="text"
                                    placeholder="Nome completo"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <span class="details">Cargo</span>
                                <input
                                    type="text"
                                    placeholder="Cargo ocupado"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <span class="details">Email</span>
                                <input
                                    type="text"
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <span class="details">Número de telefone</span>
                                <input
                                    type="text"
                                    placeholder="Telefone (DDD + número)"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <span class="details">Senha</span>
                                <input
                                    type="text"
                                    placeholder="Senha"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <span class="details">Confirme a senha</span>
                                <input
                                    type="text"
                                    placeholder="Confirme a senha"
                                    required
                                />
                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="REGISTRAR" />
                        </div>
                    </form>
                </div>
            </div>

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
                    <th>E-mail</th>
                    <th>Cargo</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Silvera Junior</td>
                    <td>silvera@email.com</td>
                    <td>Manager</td>
                    <td>(27) 99203-2171</td>
                    <td class="td-acoes">
                        <button class="btn-acoes visualizar">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-acoes editar">
                            <i class="fas fa-pen"></i>
                        </button>
                        <button class="btn-acoes remover">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Silvera Junior</td>
                    <td>silvera@email.com</td>
                    <td>Manager</td>
                    <td>(27) 99203-2171</td>
                    <td class="td-acoes">
                        <button class="btn-acoes visualizar">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-acoes editar">
                            <i class="fas fa-pen"></i>
                        </button>
                        <button class="btn-acoes remover">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Silvera Junior</td>
                    <td>silvera@email.com</td>
                    <td>Manager</td>
                    <td>(27) 99203-2171</td>
                    <td class="td-acoes">
                        <button class="btn-acoes visualizar">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-acoes editar">
                            <i class="fas fa-pen"></i>
                        </button>
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
module.exports = {};
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    opacity: 0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
}

.modal:target {
    opacity: 1;
    pointer-events: auto;
}

.modal > div {
    max-width: 700px;
    width: 100%;
    height: 75%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    background: #fff;
    overflow-y: auto;
}

.fechar {
    position: absolute;
    width: 30px;
    right: 5px;
    top: -10px;
    text-align: center;
    line-height: 30px;
    margin-top: 20px;
    background: #ffffff;
    border-radius: 50%;
    font-size: 30px;
    color: #171b1f;
}

.container {
    background: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
}

.container .title {
    font-size: 25px;
    font-weight: 500;
    padding: 5px;
    align-items: center;
    position: relative;
}

.container .title::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 30px;
    border-radius: 5px;
    background: #171b1f;
}

.container form .user-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

form .user-details .input-box {
    margin: 20px 0 12px 0;
    width: calc(100% / 2 - 20px);
}

.user-details .input-box input {
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
}

.user-details .input-box .details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid {
    border-color: #171b1f;
}

form .button {
    height: 45px;
    margin: 45px 0;
}

form .button input {
    align-content: center;
    height: 100%;
    width: 100%;
    outline: none;
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 5px;
    background: #171b1f;
}
</style>

