<template>
  <div>
    <form @submit.prevent="addToCart" class="field is-horizontal">
      <NumberSpinner :quantity="this.quantity" min="0" @update="update" />
      <button class="button is-primary" :disabled="isDisabled" type="submit">Lägg till varukorg</button>
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
      products.push({
        name: this.product.title,
        image: this.product.image[0],
        price: this.product.price,
        quantity: this.quantity
      });
      localStorage.products = JSON.stringify(products);
      this.$emit("toggle");
    }
  }
};
</script>

<style lang="scss">
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