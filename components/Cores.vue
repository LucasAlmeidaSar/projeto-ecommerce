<template>
    <div class="modal" v-if="open" :tabindex="tabindex" @blur="fechar">
        <ul>
            <li @click="abrirModalCor" class="btn-addcor"><i class="fas fa-plus"></i> Nova cor</li>
            <li v-for="(cor, i) in cores" :key="i" @click="$emit('selected', cor)">
                <div
                    class="cor"
                    :style="'background-color: ' + cor.valor"
                ></div>
                <span>{{ cor.nome }}</span>
            </li>
        </ul>
        <nova-cor ref="modalCor" @fechar="fecharModal"></nova-cor>
    </div>
</template>

<script>
module.exports = {
    props: {
        open: {
            type: Boolean,
            required: true,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },

    data() {
        return {
            cores: [],
            novaCorAberta: false,
        };
    },

    methods: {
        listarCores() {
            let _this = this;

            fetch(this.$URLAPI_BASE + "/api/cores")
                .then((res) => res.json())
                .then((res) => {
                    _this.cores = res;
                });
        },
        fechar() {
            if (!this.novaCorAberta) {
                this.$emit('fechar');
            } 
        },

        fecharModal(resultado) {
            this.$el.focus();
            this.novaCorAberta = false;

            if(resultado === true) {
                this.listarCores();
            }
        },

        abrirModalCor() {
            this.$refs.modalCor.abrir();
            this.novaCorAberta = true;
        }
    },

    mounted() {
        this.listarCores();
    },

    watch: {
        open(newValue) {
            if (newValue) {
                let _this = this;
                setTimeout(function() {
                    _this.$el.focus();
                }, 200)
            }
        },
    },

    components: {
        'nova-cor': httpVueLoader('../components/NovaCor.vue'),
    }
};
</script>

<style scoped>
.modal {
    position: absolute;
    z-index: 100;
    width: 250px;
    max-height: 250px;
    overflow: hidden;
    overflow-y: auto;
    background-color: white;
    top: -50px;
    left: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
}

li i {
    margin: 0 5px;
    margin-right: 16px;
}

.btn-addcor {
    color: rgb(0, 153, 255);
}

.modal li {
    box-sizing: border-box;
    padding: 12px 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
}

.modal li:hover {
    background-color: #ced2d6;
}

.modal ul li:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.cor {
    margin-right: 12px;
}
</style>
