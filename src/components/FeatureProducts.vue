<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-size-3-mobile is-2 has-text-left-mobile has-text-centered">{{ title }}</h2>
      <div class="columns is-multiline">
        <div
          v-for="product in products"
          v-bind:key="product.slug"
          class="column is-half-tablet is-one-quarter-desktop"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "FeatureProducts",
  props: {
    products: {
      type: Array
    },
    title: {
      type: String
    }
  },
  components: {
    ProductCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
