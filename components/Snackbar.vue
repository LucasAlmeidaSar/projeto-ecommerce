<template>
    <div>
        <transition name="slide-fade">
            <div v-if="open" class="snackbar">
                <span>
                    <i v-if="icone === 0" class="fas fa-info-circle"></i>
                    <i v-if="icone === 1" class="fas fa-exclamation-triangle danger"></i>{{ mensagem }}
                </span>
                <span @click="open = false" class="snackbar__btn">{{
                    botao
                }}</span>
            </div>
        </transition>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            open: false,
            mensagem: "",
            botao: "fechar",
            timeoutRef: null,
            icone: -1,
        };
    },

    methods: {
        abrir(mensagem, timeout, botao, icone = -1) {
            clearTimeout(this.timeoutRef);
            this.open = false;
            this.icone = icone;

            if (this.open === false) {
                _this = this;
                this.open = true;
                this.mensagem = mensagem;
                this.botao = botao;

                this.timeoutRef = setTimeout(function () {
                    _this.open = false;
                }, timeout);

            }
        },
    },
};
</script>


<style scoped>
.snackbar {
    position: fixed;
    z-index: 9999;
    background-color: rgba(20, 20, 20, 0.89);
    border-radius: 6px;
    padding: 18px 24px;
    font-size: 16px;
    color: rgb(194, 201, 201);
    min-width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%) !important;
}

.snackbar i {
    margin-right: 12px;
}

.snackbar i.danger {
    color: #f8b90a;
}

.snackbar__btn {
    color: rgb(220, 20, 97);
    text-transform: uppercase;
    cursor: pointer;
}

.slide-fade-enter-active {
    transition: all 0.4s ease;
}
.slide-fade-leave-active {
    transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
}
</style>