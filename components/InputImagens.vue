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
            let _this = this;
            if (evento.target.files[0]) {
                let imagem = evento.target.files[0];
                this.imagens.push(imagem);
                this.$emit("change", this.imagens);
                evento.target.value = "";

                let div = this.$refs.div;

                let index = this.imagens.indexOf(imagem);
                let divImg = document.createElement("div");
                divImg.classList.add("container-img");
                divImg.onclick = this.removerEvent(index, divImg);

                let img = document.createElement("img");
                img.classList.add("area-modelos__imagem");


                img.src = URL.createObjectURL(imagem);
                divImg.append(img);

                div.append(divImg);
                
            }
        },

        removerEvent(id, el) {
            let _this = this;

            return function() {

                _this.imagens.splice(id, 1);
                
                _this.$emit("change", _this.imagens);
                
                _this.resetarElementos();
            }
        },

        resetarElementos() {
            let div = this.$refs.div;

            div.innerHTML = '';

            this.imagens.forEach((imagem, index) => {
                let divImg = document.createElement("div");
                divImg.classList.add("container-img");
                divImg.onclick = this.removerEvent(index, divImg);

                let img = document.createElement("img");
                img.classList.add("area-modelos__imagem");

                img.src = URL.createObjectURL(imagem);
                divImg.append(img);

                div.append(divImg);
            });
        }
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
    display: block;
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
    margin-right: 16px;
}

.area-imagens {
    display: flex;
    align-items: center;
}

.container-img {
    position: relative;
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    margin: 0 12px;
    border: 1px solid rgba(0, 0, 0, 0.3);
}

.container-img::after {
    text-rendering: auto;
    font-weight: 900;
    font-family: "Font Awesome 5 Free";
    content: "\f2ed";
    color: 	#aa0f35;
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-img:hover::after {
    opacity: 1;
}

.container-img:hover {
    border: 1px solid 	#aa0f35;
}
</style>