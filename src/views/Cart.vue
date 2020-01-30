<template>
  <div>
    <Hero title="Din varukorg" subtitle />
    <section class="section">
      <div class="container">
        <CartOverview v-if="products.length" :products="products" />
        <CartEmpty v-else />
      </div>
    </section>
  </div>
</template>

<script>
import HeroSubpage from "@/components/HeroSubpage.vue";
import CartOverview from "@/components/CartOverview.vue";
import CartEmpty from "@/components/CartEmpty.vue";

export default {
  name: "Cart",
  components: {
    Hero: HeroSubpage,
    CartOverview,
    CartEmpty
  },
  data() {
    return {
      products: []
    };
  },
  created() {
    if (localStorage.products) {
      this.products = JSON.parse(localStorage.products);
    }
  }
};
</script>

<style scoped lang="scss">
</style>