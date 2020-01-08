<template>
  <section class="section is-dark has-text-white">
    <div class="columns">
      <div class="column is-half is-gapless feature-one">
        <p class="title is-4 has-text-white">Cras vitae mattis lacus. Integer sit amet</p>
        <p
          class="subtitle is-6 has-text-white"
        >Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto</p>
      </div>
      <div class="column is-half is-gapless feature-two">
        <p class="title is-4 has-text-white">Cras vitae mattis lacus. Integer sit amet</p>
        <p
          class="subtitle is-6 has-text-white"
        >Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeatureSection"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section {
  padding: 0;
}

.columns {
  margin-left: 0;
  margin-right: 0;
}

.column {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 50vh;
}

.feature-one {
  background-image: url("../assets/images/feature-1.jpg");
  background-position: center;
  background-size: cover;
}

.feature-two {
  background-image: url("../assets/images/feature-2.jpg");
  background-position: center;
  background-size: cover;
}
</style>
