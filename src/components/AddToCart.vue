<template>
  <div>
    <form @submit.prevent="addToCart">
      <NumberSpinner :quantity="this.quantity" min="0" @update="update" />
      <button class="button is-primary" :disabled="isDisabled" type="submit">Lägg till varukorg</button>
    </form>
    <p v-if="product.inventory" class="is-size-7">
      <span class="icon">
        <check-icon class="has-text-primary" />
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
</template>

<script>
import NumberSpinner from "@/components/NumberSpinner.vue";
import CartOffIcon from "vue-material-design-icons/CartOff.vue";
import CheckIcon from "vue-material-design-icons/CheckCircle.vue";

export default {
  name: "AddToCart",
  components: {
    NumberSpinner,
    CartOffIcon,
    CheckIcon
  },
  data() {
    return {
      quantity: 1
    };
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    isDisabled() {
      return !this.product.inventory;
    },
    productImg() {
      return require("@/assets/images/products/" + this.product.image[0]);
    }
  },
  methods: {
    update(number) {
      this.quantity = number;
    },
    addToCart() {
      let products = [];

      if (localStorage.products) {
        products = JSON.parse(localStorage.products);
      }

      if (this.productAdded(products)) {
        const index = products.findIndex(
          product => product.id === this.product.id
        );
        products[index].quantity = this.quantity;
      } else {
        products.push({
          name: this.product.title,
          id: this.product.id,
          image: this.product.image[0],
          price: this.product.price,
          quantity: this.quantity
        });
      }
      localStorage.products = JSON.stringify(products);
      this.$emit("toggle");
    },
    productAdded(products) {
      return products.some(product => product.id === this.product.id);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  margin-bottom: 0.75rem;
}

.button.is-primary {
  width: 75%;
}

@media screen and (min-width: 768px) {
  form {
    display: flex;
  }

  .button.is-primary {
    margin-left: 1rem;
    width: auto;
  }
}
</style>