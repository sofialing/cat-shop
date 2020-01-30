<template>
  <article class="media">
    <figure class="media-left image is-128x128">
      <img :src="image" />
    </figure>
    <div class="media-content">
      <p class="content">{{item.name}}</p>
      <NumberSpinner :quantity="item.quantity" min="1" @update="update(item, ...arguments)" />
      <a href @click.prevent="removeItem(index)">
        <small class="has-text-grey">
          <trash-can-icon class="icon-2x" />Ta bort
        </small>
      </a>
    </div>
    <div class="media-right">
      <p class="content">{{item.price}} kr</p>
    </div>
  </article>
</template>

<script>
import NumberSpinner from "@/components/NumberSpinner.vue";
import TrashCanIcon from "vue-material-design-icons/TrashCanOutline.vue";

export default {
  name: "CartItem",
  components: {
    NumberSpinner,
    TrashCanIcon
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    image() {
      return require("@/assets/images/products/" + this.item.image);
    }
  },
  methods: {
    update(item, number) {
      item.quantity = number;
      // Save to local storage
      const products = JSON.parse(localStorage.products);
      products[this.index].quantity = number;
      localStorage.products = JSON.stringify(products);
    },
    removeItem(index) {
      this.$emit("remove", index);
    }
  }
};
</script>

<style lang="scss">
.material-design-icon.icon-2x {
  height: 1.5em;
  width: 1.5em;
  line-height: 1;
}
</style>