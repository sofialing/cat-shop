<template>
  <div class="home">
    <Hero />
    <Intro />
    <FeatureProducts :products="products.bestSellers" title="Mest populära" />
    <FeatureSection />
    <FeatureProducts :products="products.bestSellers" title="Nytt i butiken" />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Intro from "@/components/Intro.vue";
import FeatureProducts from "@/components/FeatureProducts.vue";
import FeatureSection from "@/components/FeatureSection.vue";

import { Products } from "@/services/Products";

export default {
  name: "home",
  components: {
    Hero,
    Intro,
    FeatureProducts,
    FeatureSection
  },
  data() {
    return {
      products: new Products()
    };
  }
};
</script>
