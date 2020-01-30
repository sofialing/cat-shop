<template>
  <div>
    <Hero :title="product.title" subtitle />
    <section class="section">
      <div class="container">
        <Breadcrumbs
          to="/products"
          page="Produkter"
          :to-category="productUrl"
          :category="product.category"
          :title="product.title"
        />

        <div class="columns is-vcentered">
          <div class="column is-half">
            <figure class="image is-square">
              <img :src="productImg" />
            </figure>
          </div>
          <div class="column is-two-fifths is-offset-1">
            <div class="info">
              <h2 class="title is-3">{{ product.title }}</h2>
              <star-icon class="icon-2x has-text-primary" v-for="idx in rating" :key="idx" />
              <star-icon class="icon-2x has-text-grey-light" v-for="idx in remaining" :key="idx" />
              <p class="title price">{{ product.price }}:-</p>

              <form @submit.prevent="addToCart" class="field is-horizontal">
                <div class="field has-addons">
                  <div class="control">
                    <a class="button is-outlined" @click="subtract">-</a>
                  </div>
                  <div class="control">
                    <input class="input is-expanded" type="text" :value="quantity" />
                  </div>
                  <div class="control">
                    <a class="button is-outlined" @click="add">+</a>
                  </div>
                </div>
                <button
                  class="button is-primary"
                  :disabled="isDisabled"
                  type="submit"
                >Lägg till varukorg</button>
              </form>

              <p v-if="product.inventory" class="is-size-7">
                <span class="icon">
                  <check-icon class="has-text-success" />
                </span>
                <span>Finns i lager</span>
              </p>
              <p v-else class="is-size-7">
                <span class="icon">
                  <cart-off-icon class="has-text-danger" />
                </span>
                <span>Tillfälligt slut</span>
              </p>
            </div>
            <div>
              <h3 class="title is-5">Produktbeskrivning</h3>
              <p class="content">{{ product.description }}</p>
            </div>
          </div>
        </div>
        <arrow-icon />
        <router-link to="/products" class="is-size-7 has-text-grey">Tillbaka till alla produkter</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSubpage from "@/components/HeroSubpage.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import StarIcon from "vue-material-design-icons/Star.vue";
import CartOffIcon from "vue-material-design-icons/CartOff.vue";
import CheckIcon from "vue-material-design-icons/CheckCircle.vue";
import ArrowIcon from "vue-material-design-icons/ArrowLeft.vue";

export default {
  name: "ProductView",
  components: {
    Hero: HeroSubpage,
    Breadcrumbs,
    CartOffIcon,
    CheckIcon,
    StarIcon,
    ArrowIcon
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: {},
      rating: 0,
      remaining: 0,
      quantity: 1
    };
  },
  created() {
    this.product = this.products.find(product => product.slug == this.slug);
    this.rating = this.product.rating;
    this.remaining = 5 - this.product.rating;
  },
  computed: {
    productImg() {
      return require("@/assets/images/products/" + this.product.image[0]);
    },
    productUrl() {
      return "/products?category=" + this.product.category.toLowerCase();
    },
    isDisabled() {
      return !this.product.inventory;
    }
  },
  methods: {
    subtract() {
      this.quantity ? this.quantity-- : 0;
    },
    add() {
      this.quantity++;
    },
    addToCart() {
      let products = [];
      if (localStorage.products) {
        products = JSON.parse(localStorage.products);
      }
      products.push({
        name: this.product.title,
        image: this.productImg,
        quantity: this.quantity
      });
      localStorage.products = JSON.stringify(products);
    }
  }
};
</script>

<style scoped lang="scss">
.info {
  margin-bottom: 3rem;
}
.title.is-3 {
  margin-bottom: 0.25rem;
}
.price {
  font-size: 4rem;
}
.title.is-5 {
  margin-bottom: 0.2rem;
}
.material-design-icon.icon-2x {
  height: 1.5em;
  width: 1.5em;
  line-height: 1;
  margin-right: 0.1rem;
}

.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 1.5em;
  width: 1.5em;
  line-height: 1;
}

.field.is-horizontal {
  max-width: 90%;
}

.input {
  text-align: center;
}

.button.is-primary {
  width: 100%;
}

@media screen and (min-width: 768px) {
  .field.is-horizontal {
    width: auto;
    margin-bottom: 0;
    display: flex;
  }

  .input {
    width: 5rem;
    text-align: center;
  }

  .button.is-primary {
    margin-left: 1rem;
    width: auto;
  }
}
</style>
