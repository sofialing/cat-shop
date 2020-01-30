<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <transition appear appear-active-class="animated fadeInUp slow">
              <h1 class="title is-1 has-text-weight-bold">Vi älskar katter. Katter älskar oss.</h1>
            </transition>
            <transition appear appear-active-class="animated fadeInUp slow delay-1s">
              <h2 class="subtitle is-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
                suscipit voluptatem aliquid ipsam distinctio ipsum
              </h2>
            </transition>
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

.hero-title-enter-active,
.hero-title-leave-active {
  transition: transform 0.5s ease;
}
.hero-title-enter,
.hero-title-leave-to {
  transform: translateX(-100%);
}

@media screen and (min-width: 1024px) {
  .hero .title {
    font-size: 4.5rem;
  }

  .hero .subtitle {
    margin-top: -1.5rem;
    line-height: 1.5;
  }
}
</style>
