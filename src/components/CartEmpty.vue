<template>
  <div class="columns">
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
</template>

<script>
export default {
  name: "CartEmpty"
};
</script>

<style lang="scss" scoped>
.empty-cart {
  margin-bottom: 1.5rem;
}
</style>