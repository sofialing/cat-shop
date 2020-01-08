<template>
  <div>
    <Hero :title="title" :subtitle="subtitle" />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="buttons has-addons">
              <button class="button is-white is-active">Visa alla</button>
              <button
                class="button is-white"
                v-for="category in products.categories"
                :key="category"
              >{{ category }}</button>
            </div>
          </div>
        </div>

        <div class="columns is-multiline">
          <div
            v-for="product in products.products"
            v-bind:key="product.slug"
            class="column is-half-tablet is-one-quarter-desktop"
          >
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import HeroSubpage from "@/components/HeroSubpage.vue";
import { Products } from "@/services/Products";

export default {
  name: "home",
  components: {
    ProductCard,
    Hero: HeroSubpage
  },
  data() {
    return {
      products: new Products(),
      title: "Våra produkter",
      subtitle:
        "Hos oss kan du hitta just din katts favoriter. Katter är som du säkert vet kända för att vara lite kräsna, och med all rätt tycker vi - självklart förtjänar katten endast det bästa! Bland våra produkter hittar du ett urval av kattmat, kattgodis, kattleksaker, kattlådor och allt annat du och din vän kan tänkas behöva för ett lyckligt och bekymmersfritt kattliv."
    };
  }
};
</script>
