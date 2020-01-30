<template>
  <div class="columns">
    <div class="column is-7">
      <h2 class="title is-4">Varukorg ({{products.length}} varor)</h2>
      <CartItem
        v-for="(product, index) in products"
        v-bind:key="product.title"
        :item="product"
        :index="index"
        @remove="removeItem"
      />
      <small>Artiklar i varukorgen är inte reserverade.</small>
    </div>

    <CartDetails :sum="sum" />
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import CartDetails from "@/components/CartDetails.vue";

export default {
  name: "CartOverview",
  components: {
    CartItem,
    CartDetails
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  computed: {
    sum() {
      return this.products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      );
    }
  },
  methods: {
    removeItem(index) {
      this.products.splice(index, 1);
      localStorage.products = JSON.stringify(this.products);
    }
  }
};
</script>

<style lang="scss">
article:last-of-type {
  margin-bottom: 2rem;
}
</style>