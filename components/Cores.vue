<template>
    <div class="modal" v-if="open" :tabindex="tabindex" @blur="$emit('fechar')">
        <ul>
            <li v-for="(cor, i) in cores" :key="i" @click="$emit('selected', cor)">
                <div
                    class="cor"
                    :style="'background-color: ' + cor.valor"
                ></div>
                <span>{{ cor.nome }}</span>
            </li>
        </ul>
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
        };
    },

    methods: {
        listarCores: function () {
            let _this = this;

            fetch(this.$URLAPI_BASE + "/api/cores")
                .then((res) => res.json())
                .then((res) => {
                    _this.cores = res;
                });
        },
    },

    watch: {
        open(newValue) {
            if (newValue) {
                console.log("aberto: " + newValue);
                this.listarCores();
                let _this = this;
                setTimeout(function() {
                    _this.$el.focus();
                }, 150)
            }
        },
    },
};
</script>

<style scoped>
.modal {
    position: absolute;
    z-index: 100;
    width: 250px;
    max-height: 400px;
    overflow: hidden;
    overflow-y: auto;
    background-color: white;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
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
    height: 25px;
    width: 25px;
    margin-right: 12px;
    border-radius: 50%;
}
</style>
