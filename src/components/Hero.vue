<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">Vi har allt som gör din katt lycklig!</h1>
            <h2 class="subtitle is-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
              suscipit voluptatem aliquid ipsam distinctio ipsum
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  background-image: url("../assets/images/hero-bg.jpg");
  background-size: cover;
  background-position: center;
}

@media screen and (min-width: 1024px) {
  .title {
    font-size: 4rem;
  }
}
</style>
