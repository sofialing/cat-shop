<template>
  <div class="home">
    <Hero />
    <Intro />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Intro from "@/components/Intro.vue";
export default {
  name: "home",
  components: {
    Hero,
    Intro
  }
};
</script>
