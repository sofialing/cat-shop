<template>
  <a :href="productUrl">
    <div class="card">
      <div class="card-image">
        <figure class="image is-square has-background-white-ter">
          <img :src="require('@/assets/images/products/transparent/' + product.image[1])" />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h3 class="title is-size-6 is-marginless">{{product.title}}</h3>
          <p class="subtitle is-size-2 has-text-weight-bold is-marginless">{{product.price}}:-</p>
          <p class="is-size-7" v-html="checkInStock"></p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Array
    }
  },
  computed: {
    productUrl() {
      return "/products/" + this.product.slug;
    },
    checkInStock() {
      if (this.product.inventory) {
        return `
          <span class="icon has-text-primary">
            <i class="fas fa-check-circle"></i>
          </span> Finns i lager`;
      } else {
        return `
          <span class="icon has-text-danger	">
            <i class="fas fa-times-circle"></i>
          </span> Tillfälligt slut`;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  box-shadow: none !important;

  .card-content {
    padding: 1.5rem 0;
  }
}
</style>
