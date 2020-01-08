<template>
  <section class="hero is-primary is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds has-text-centered">
            <h1 class="title is-1 has-text-weight-bold">{{ title }}</h1>
            <p v-show="subtitle" class="content is-medium">{{ subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSubpage",
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  background-image: url("../assets/images/hero-sub.jpg");
  background-size: cover;
  background-position: center;
}
</style>
