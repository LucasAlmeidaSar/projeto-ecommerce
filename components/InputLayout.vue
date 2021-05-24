<template>
    <div class="campo" ref="div">
        <label class="campo__label">
            <span class="campo__span"
                ><i v-if="classeIcone" :class="icone"></i><slot></slot
            ></span>
            <input
                :type="type"
                class="campo__input"
                :value="value"
                @keyup="$emit('input', $event.target.value)"
                :required="preencher"
                :pattern="pattern"
                ref="input"
                :min="min"
                :maxlength="maxlength"
                :step="step"
            />
            <div class="campo__border"></div>
        </label>
    </div>
</template>

<script>
module.exports = {
    props: {
        type: {
            type: String,
            required: false,
            default: "text",
        },

        id: {
            type: String,
            required: true,
        },

        preencher: {
            type: Boolean,
            required: false,
            default: false,
        },
        value: String,
        icone: String,
        pattern: String,
        min: String,
        maxlength: String,
        step: String,
    },

    data: function () {
        return {
            classeIcone: false,
            input: null,
            valorNumerico: null,
        };
    },

    mounted: function () {
        const types = ["date"];

        if (this.icone) {
            this.classeIcone = true;
        }
        let div = this.$refs.div;
        let input = this.$refs.input;

        if (this.type === "moeda") {
            this.$jq(input).maskMoney({
                showSymbol: true,
                symbol: "R$",
                decimal: ",",
                thousands: ".",
            });
        }

        if (types.includes(this.type)) {
            div.classList.add("campo--focus-2");
            return;
        }

        input.addEventListener("focus", function () {
            div.classList.add("campo--focus");
        });

        input.addEventListener("focusout", function () {
            if (input.value != "") {
                return;
            }
            div.classList.remove("campo--focus");
        });
        this.input = input;
    },
};
</script>

<style scoped>
.campo {
    padding-top: 18px;
    width: 100%;
}

.campo,
.campo__label {
    position: relative;
}

.campo__input,
.campo__input:hover {
    border: none;
    outline: none;
}

.campo__input {
    width: 100%;
    background-color: transparent;
    user-select: none;
    font-size: 18px;
    height: 40px;
}

.campo__span {
    position: absolute;
    top: 0;
    white-space: nowrap;
    cursor: text;
    font-size: 18px;
    transition: font-size 0.15s ease-out, transform 0.15s ease-out;
    opacity: 0.8;
}

.campo__border {
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.39);
}

.campo__border::after {
    position: absolute;
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.767);
    transition: transform 0.3s ease-out;
    transform: scaleX(0);
}

.campo--focus .campo__span {
    font-size: 0.7em;
    transform: translateY(-22px);
}

.campo--focus .campo__border::after {
    transform: scaleX(1);
}

.campo--focus-2 .campo__span {
    font-size: 0.7em;
    transform: translateY(-22px);
}

.campo__label:hover .campo__border::after {
    transform: scaleX(1);
}

i {
    margin-right: 10px;
    transition: margin-right 0.3s ease;
}

.campo--focus i {
    margin-right: 4px;
}
</style>