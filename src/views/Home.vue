<template>
  <div class="home">
    <Hero />
    <Intro />
    <ProductsBestSellers :products="products.bestSellers" />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Intro from "@/components/Intro.vue";
import ProductsBestSellers from "@/components/ProductsBestSellers.vue";

import { Products } from "@/services/Products";

export default {
  name: "home",
  components: {
    Hero,
    Intro,
    ProductsBestSellers
  },
  data() {
    return {
      products: new Products()
    };
  }
};
</script>
