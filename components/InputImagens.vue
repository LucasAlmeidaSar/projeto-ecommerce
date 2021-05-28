<template>
    <div class="area-modelos__imagens">
        <div ref="div" class="area-imagens"></div>
        <label>
            <span><i class="fas fa-image"></i></span>
            <span>Adicionar</span>
            <input
                type="file"
                accept="image/png,image/jpeg"
                @change="imagemSelecionada($event)"
            />
        </label>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            imagens: [],
        };
    },

    methods: {
        imagemSelecionada(evento) {
            if (evento.target.files[0]) {
                let imagem = evento.target.files[0];
                this.imagens.push(imagem);
                this.$emit("change", this.imagens);
                evento.target.value = "";

                let div = this.$refs.div;
                div.innerHTML = "";

                this.imagens.forEach((imagem) => {
                    let img = document.createElement("img");
                    img.classList.add("area-modelos__imagem");

                    let reader = new FileReader();

                    reader.onload = function () {
                        img.src = reader.result;
                    };
                    reader.readAsDataURL(imagem);

                    div.append(img);
                });
            }
        },
    },

    watch: {
        imagens() {
            console.log(this.imagens);
        },
    },
};
</script>

<style scoped>
.area-modelos__imagens {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    border: 1px dashed #353535;
    border-radius: 6px;
    overflow-x: auto;
}
.area-modelos__imagem {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 0 12px;
    border: 1px solid rgba(0, 0, 0, 0.3);
}

input[type="file"] {
    opacity: 0;
    width: 0;
    height: 0;
    display: none;
}

label {
    display: flex;
    height: 100px;
    width: 100px;
    border: 1px dashed rgba(20, 125, 224, 0.801);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: rgb(20, 126, 224);
}
</style>