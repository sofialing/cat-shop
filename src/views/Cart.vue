<template>
  <div>
    <Hero title="Din varukorg" subtitle />
    <section class="section">
      <div class="container">
        <div class="columns" v-if="nrOfItems">
          <div class="column is-7">
            <h2 class="title is-4">Varukorg ({{nrOfItems}} varor)</h2>
            <article class="media" v-for="(product, index) in products" v-bind:key="product.title">
              <figure class="media-left">
                <p class="image is-128x128">
                  <img :src="product.image" />
                </p>
              </figure>
              <div class="media-content">
                <p class="content">{{product.name}}</p>
                <NumberSpinner
                  :quantity="product.quantity"
                  min="1"
                  @update-quantity="update(product, ...arguments)"
                />
                <a href @click.prevent="deleteItem(index)">
                  <small>Ta bort</small>
                </a>
              </div>
              <div class="media-right">
                <p class="content">{{product.price}} kr</p>
              </div>
            </article>
            <small>Artiklar i varukorgen är inte reserverade.</small>
          </div>

          <div class="column is-4 is-offset-1">
            <div class="table-container">
              <table class="table is-fullwidth">
                <thead>
                  <tr>
                    <th colspan="2">
                      <h2 class="title is-4">Totalsumma</h2>
                    </th>
                  </tr>
                </thead>
                <tr>
                  <td>Deltotal</td>
                  <td>{{sum}} kr</td>
                </tr>
                <tr>
                  <td>Frakt</td>
                  <td>Gratis</td>
                </tr>
                <tr class="has-text-weight-bold">
                  <td>Totalsumma (inkl. moms)</td>
                  <td>{{sum}} kr</td>
                </tr>
              </table>
              <button class="button is-primary is-fullwidth">Gå till kassan</button>
            </div>
          </div>
        </div>

        <div class="columns" v-else>
          <div class="column is-full has-text-centered">
            <figure class="image is-128x128 is-inline-flex empty-cart">
              <img src="@/assets/empty-cart.svg" />
            </figure>
            <p class="content is-medium">Din varukorg är tom - men så behöver det inte vara.</p>
            <p class="content">
              <router-link to="/products" class="button is-text">Fortsätt shoppa</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSubpage from "@/components/HeroSubpage.vue";
import NumberSpinner from "@/components/NumberSpinner.vue";

export default {
  name: "Cart",
  components: {
    Hero: HeroSubpage,
    NumberSpinner
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
  },
  computed: {
    nrOfItems() {
      return this.products.length;
    },
    sum() {
      return this.products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      );
    }
  },
  methods: {
    update(product, number) {
      product.quantity = number;
      localStorage.products = JSON.stringify(this.products);
    },
    deleteItem(index) {
      this.$delete(this.products, index);
      localStorage.products = JSON.stringify(this.products);
    }
  }
};
</script>

<style scoped lang="scss">
button {
  font-weight: 700;
  text-transform: uppercase;
}

.empty-cart {
  margin-bottom: 1.5rem;
}
</style>