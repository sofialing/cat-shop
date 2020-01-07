<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-3 has-text-weight-bold">Våra bästsäljare</h2>
      <div class="columns">
        <div
          v-for="product in products"
          v-bind:key="product.slug"
          class="column is-half-tablet is-one-quarter-desktop"
        >
          <img :src="require('@/assets/images/products/' + product.image)" alt />
          <h3 class="is-size-6 has-text-weight-bold">{{product.title}}</h3>
          <p class="is-size-2 has-text-weight-bold">{{product.price}}:-</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductsBestSellers",
  props: {
    products: {
      type: Array
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
