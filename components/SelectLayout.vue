<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <span v-if="selected">
        <template v-if="campo">{{ selected[campo] }}</template>
        <template v-else>{{selected}}</template>
      </span>
      <span v-else>{{placeholder}}</span>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        <template v-if="campo">{{ option[campo] }}</template>
        <template v-else>{{option}}</template>
      </div>
    </div>
  </div>
</template>

<script>
module.exports= {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    placeholder: {
        type: String,
        required: false,
        default: 'Selecione uma opção',
    },
    campo: {
        type: String,
        required: false,
        default: null,
    }
  },
  data() {
    return {
      selected: null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>

.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #858585;
  color: rgb(0, 0, 0);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #000000;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: rgb(0, 0, 0) transparent transparent transparent;
}

.custom-select .items {
  color: rgb(0, 0, 0);
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #000000;
  border-left: 1px solid #000000;
  border-bottom: 1px solid #000000;
  position: absolute;
  background-color: #ffffff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: rgb(0, 0, 0);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #20222e;
  color: white;
}

.selectHide {
  display: none;
}
</style>