<template>
  <div>
    <Hero :title="product.title" subtitle />
    <section class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li class="is-size-7">
              <router-link to="/products" class="has-text-grey">Produkter</router-link>
            </li>
            <li class="is-size-7">
              <router-link :to="productUrl" class="has-text-grey">{{product.category}}</router-link>
            </li>
            <li class="is-active is-size-7">
              <a href="#">{{product.title}}</a>
            </li>
          </ul>
        </nav>

        <div class="columns is-vcentered">
          <div class="column is-half">
            <figure class="image is-square">
              <img :src="productImg" />
            </figure>
          </div>
          <div class="column is-two-fifths is-offset-1">
            <div class="info">
              <h2 class="title is-3">{{product.title}}</h2>
              <star-icon class="icon-2x has-text-primary" v-for="idx in rating" :key="idx" />
              <star-icon class="icon-2x has-text-grey-light" v-for="idx in remaining" :key="idx" />
              <p class="title price">{{product.price}}:-</p>

              <div class="field is-horizontal">
                <div class="field has-addons">
                  <div class="control">
                    <a class="button is-outlined">-</a>
                  </div>
                  <div class="control">
                    <input class="input" type="text" value="1" />
                  </div>
                  <div class="control">
                    <a class="button is-outlined">+</a>
                  </div>
                </div>
                <button
                  class="button is-primary"
                  :disabled="product.inventory ? disabled : ''"
                >Lägg till varukorg</button>
              </div>

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
              <p class="content">{{product.content}}</p>
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
import StarIcon from "vue-material-design-icons/Star.vue";
import CartOffIcon from "vue-material-design-icons/CartOff.vue";
import CheckIcon from "vue-material-design-icons/CheckCircle.vue";
import ArrowIcon from "vue-material-design-icons/ArrowLeft.vue";

export default {
  name: "ProductView",
  components: {
    Hero: HeroSubpage,
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
      remaining: 0
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
      return "/products?category=" + this.product.category;
    },
    productRating() {
      let remaining = 5 - this.product.rating;
      let rating = "";
      for (let i = 0; i < this.product.rating; i++) {
        rating += '<star-icon class="icon-2x"></star-icon>';
      }
      for (let i = 0; i < remaining; i++) {
        rating += '<star-outline-icon class="icon-2x"></star-outline-icon>';
      }
      console.log(rating);
      return rating;
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
  margin-bottom: 0;
}

.input {
  width: 5rem;
  text-align: center;
}

.button.is-primary {
  margin-left: 1rem;
}
</style>