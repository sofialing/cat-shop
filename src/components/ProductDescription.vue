<template>
  <div class="content">
    <h3 class="title is-5">Produktbeskrivning</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductDescription",
  props: {
    description: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  margin-top: 2rem;
}

.title.is-5 {
  margin-bottom: 0.25rem;
}

@media screen and (min-width: 768px) {
  .content {
    margin-top: 3rem;
  }
}
</style>