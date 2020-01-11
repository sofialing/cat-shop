<template>
  <div>
    <Hero :title="title" :subtitle="subtitle" />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="buttons has-addons">
              <router-link
                to="/products"
                class="button is-white"
                :class="{'is-active' : !$route.query.category }"
              >Visa alla</router-link>
              <router-link
                v-for="category in getCategories"
                :key="category"
                :to="getQuery(category)"
                class="button is-white"
                :class="{'is-active' : category.toLowerCase() === $route.query.category }"
              >{{ category }}</router-link>
            </div>
          </div>
        </div>

        <div class="columns is-multiline">
          <div
            v-for="product in getProducts"
            :key="product.slug"
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

export default {
  name: "Products",
  components: {
    ProductCard,
    Hero: HeroSubpage
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    blogPosts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      title: "Våra produkter",
      subtitle:
        "Hos oss kan du hitta just din katts favoriter. Katter är som du säkert vet kända för att vara lite kräsna, och med all rätt tycker vi - självklart förtjänar katten endast det bästa! Bland våra produkter hittar du ett urval av kattmat, kattgodis, kattleksaker, kattlådor och allt annat du och din vän kan tänkas behöva för ett lyckligt och bekymmersfritt kattliv."
    };
  },
  computed: {
    getCategories() {
      let allCategories = this.products.map(product => product.category);
      allCategories = new Set(allCategories);
      return [...allCategories];
    },
    getProducts() {
      if (this.$route.query.category) {
        return this.products.filter(
          product =>
            product.category.toLowerCase() === this.$route.query.category
        );
      }
      return this.products;
    }
  },
  methods: {
    getQuery(category) {
      return "/products?category=" + category.toLowerCase();
    }
  }
};
</script>
