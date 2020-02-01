<template>
  <div class="field is-horizontal">
    <div class="field has-addons">
      <div class="control">
        <a class="button is-outlined" @click="subtract">-</a>
      </div>
      <div class="control">
        <input class="input is-expanded" type="text" :value="newQuantity" />
      </div>
      <div class="control">
        <a class="button is-outlined" @click="add">+</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberSpinner",
  props: {
    quantity: {
      type: Number,
      required: true
    },
    min: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      newQuantity: 0
    };
  },
  created() {
    this.newQuantity = this.quantity;
  },
  methods: {
    subtract() {
      if (this.newQuantity === Number(this.min)) {
        return;
      }
      this.newQuantity--;
      this.$emit("update", this.newQuantity);
    },
    add() {
      this.newQuantity++;
      this.$emit("update", this.newQuantity);
    }
  }
};
</script>

<style lang="scss" scoped>
.field.is-horizontal {
  max-width: 75%;
}

.input {
  text-align: center;
}

@media screen and (min-width: 768px) {
  .field.is-horizontal {
    width: auto;
    margin-bottom: 0.5rem;
  }

  .input {
    width: 5rem;
    text-align: center;
  }
}
</style>